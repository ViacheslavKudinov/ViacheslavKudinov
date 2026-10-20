import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { access, readFile, readdir } from 'node:fs/promises';
import test from 'node:test';

test('build produces a project-path-safe Pages artifact', async () => {
  execFileSync(process.execPath, ['scripts/build.mjs'], { cwd: new URL('../', import.meta.url) });
  const output = new URL('../dist/', import.meta.url);
  const html = await readFile(new URL('index.html', output), 'utf8');
  assert.match(html, /<title>Viacheslav Kudinov/);
  assert.match(html, /Platform &amp; DevSecOps Engineer/);
  assert.match(html, /https:\/\/github.com\/ViacheslavKudinov\/doppler-intellij-plugin/);
  assert.match(html, /mailto:viacheslav@kudinov.tech/);
  assert.match(html, /id="contributions"/);
  assert.match(html, /id="tools"/);
  assert.match(html, /id="experience"/);
  assert.ok(html.includes('assets/icons/githubactions.svg'));
  for (const logo of ['company-atg.png', 'company-epam.png', 'net_ent_logo.jpeg']) {
    assert.ok(html.includes(`assets/icons/${logo}`));
  }
  for (const repository of ['mongodb\/kingfisher', 'integrations\/terraform-provider-github', 'anchore\/sbom-action']) {
    assert.ok(html.includes(`https://github.com/${repository}/pull/`));
  }
  assert.match(html, /name="viewport"/);
  assert.doesNotMatch(html, /(?:href|src)="\/(?!\/)/);
  assert.match(html, /href="https:\/\/plugins\.jetbrains\.com\/plugin\/34961[^"]*"/);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(html.includes(`id="${match[1]}"`), `Missing anchor ${match[1]}`);
  }
  for (const match of html.matchAll(/(?:href|src)="\.\/([^"]+)"/g)) {
    await access(new URL(match[1], output));
  }
  const canonical = new URL(html.match(/rel="canonical" href="([^"]+)"/)[1]);
  assert.equal(html.match(/property="og:url" content="([^"]+)"/)[1], canonical.href);
  for (const match of html.matchAll(/(?:property="og:image"|name="twitter:image") content="([^"]+)"/g)) {
    const socialImage = new URL(match[1]);
    assert.equal(socialImage.origin, canonical.origin);
    const png = await readFile(new URL(socialImage.pathname.slice(1), output));
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    assert.deepEqual([png.readUInt32BE(16), png.readUInt32BE(20)], [1200, 630]);
  }
  assert.deepEqual((await readdir(output)).sort(), ['.nojekyll', 'assets', 'index.html']);
});
