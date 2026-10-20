## Portfolio Website

The single-page portfolio lives in `site/` on the `website` branch. The profile content below is preserved.

### Local Checks

Use Node.js 22 or later:

```sh
npm ci --ignore-scripts
npm test
npm run build
```

Open `dist/index.html` directly in your browser. No development server or npm runtime dependencies are required. Edit `site/index.html` for content and `site/assets/styles.css` for styling. The avatar, tool icons, `vk.` favicon, and social preview are local assets; typography uses system fonts. The site links directly to the plugin on JetBrains Marketplace. A small local script fills in the current copyright year; navigation and content remain available without JavaScript.

The canonical URL and sharing metadata target the configured custom domain, `https://kudinov.tech/`. Update them if the domain changes. The 1200 × 630 social image is `site/assets/social-preview.png`; regenerate it on macOS with `swift scripts/generate-social-preview.swift` after editing the drawing source.

For a layout review, check widths of 320px, 375px, 768px, and 1280px, along with 200% browser zoom. Confirm navigation remains reachable, anchor headings stay visible, links show keyboard focus, and long repository names and metadata wrap without horizontal scrolling. The Node checks validate build output and local asset references; they do not replace browser layout checks.

### GitHub Pages Deployment

The workflow at `.github/workflows/pages.yml` tests and builds the site, then deploys the `dist/` artifact using GitHub's official Pages actions. Pull requests only build and test; deployment runs only from `website`.

When ready to publish:

1. Commit and push the local `website` branch.
2. In repository **Settings > Pages > Build and deployment**, select **GitHub Actions** as the source.
3. Allow the `website` branch in the `github-pages` environment's deployment rules if the environment restricts branches.
4. Push another commit to `website` or rerun the failed deployment after enabling Pages. Manual dispatch becomes available when this workflow also exists on the repository's default branch.

Public URL: <https://kudinov.tech/> (the custom domain configured in GitHub Pages). The underlying project-site URL is <https://viacheslavkudinov.github.io/ViacheslavKudinov/>. Relative asset paths support both locations. Manage the custom domain in repository **Settings > Pages**.

Nothing is committed, pushed, or deployed automatically during local setup.

---

## 👋 Hi, I’m @ViacheslavKudinov 🇺🇦
- Highly skilled, results-oriented, and proactive Continuous Delivery Engineer with a strong academic background (Master’s Degree in Technical Cybernetics) and a special focus on application and infrastructure operations automation
- Highly proficient in supporting the creation, deployment, and operations of different cloud/on-prem environments with comprehensive software (Terraform, Ansible, Puppet)
- Implement Continuous Integration, continuous delivery, and deployment using various CI/CD Tools like Jenkins, Bamboo, Google Cloud Build, GitHub actions, Argo CD, Flux CD
- Proven track record of successful collaboration within software engineering, quality assurance teams to deploy and operate solutions, help to automate and streamline operations and processes, and build and maintain tools for deployment, monitoring, and operations
- Results-driven with strong problem solving and troubleshooting skills


## 🔧 Technologies & Tools

### OS
![](https://img.shields.io/badge/-Ubuntu-informational?style=for-the-badge&logo=Ubuntu&logoColor=white&color=E95420)
![](https://img.shields.io/badge/-CentOS-informational?style=for-the-badge&logo=CentOS&logoColor=white&color=262577)
![](https://img.shields.io/badge/-RedHat_Linux-informational?style=for-the-badge&logo=redhat&logoColor=white&color=EE0000)
![](https://img.shields.io/badge/-Amazon_Linux-informational?style=for-the-badge&logo=amazonaws&logoColor=white&color=232F3E)
![](https://img.shields.io/badge/-MacOS-informational?style=for-the-badge&logo=apple&logoColor=white&color=000000)


### Containers
![](https://img.shields.io/badge/-RedHat_OpenShift-informational?style=for-the-badge&logo=redhatopenshift&logoColor=white&color=EE0000)
![](https://img.shields.io/badge/-Docker-informational?style=for-the-badge&logo=docker&logoColor=white&color=2496ED)
![](https://img.shields.io/badge/-Kubernetes-informational?style=for-the-badge&logo=kubernetes&logoColor=white&color=326CE5)
![](https://img.shields.io/badge/-Rancher-informational?style=for-the-badge&logo=rancher&logoColor=white&color=0075A8)

### Public Clouds
![](https://img.shields.io/badge/-GCP-informational?style=for-the-badge&logo=googlecloud&logoColor=white&color=4285F4)
![](https://img.shields.io/badge/-AWS-informational?style=for-the-badge&logo=amazonaws&logoColor=white&color=232F3E)

### CI/CD
![](https://img.shields.io/badge/-Github_Actions-informational?style=for-the-badge&logo=githubactions&logoColor=white&color=2088FF)
![](https://img.shields.io/badge/-Drone-informational?style=for-the-badge&logo=drone&logoColor=white&color=212121)
![](https://img.shields.io/badge/-Jenkins-informational?style=for-the-badge&logo=jenkins&logoColor=white&color=D24939)
![](https://img.shields.io/badge/-GoCD-informational?style=for-the-badge&logo=gocd&logoColor=white&color=94399E)
![](https://img.shields.io/badge/-Bamboo-informational?style=for-the-badge&logo=bamboo&logoColor=white&color=0052CC)
![](https://img.shields.io/badge/-Google_Cloud_Build-informational?style=for-the-badge&logo=googlecloud&logoColor=white&color=4285F4)
![](https://img.shields.io/badge/-Flux_CD-informational?style=for-the-badge&logo=flux&logoColor=white&color=5468FF)
![](https://img.shields.io/badge/-Argo_CD-informational?style=for-the-badge&logo=argo&logoColor=white&color=EF7B4D)




### IaC/Configuration Management
![](https://img.shields.io/badge/-RedHat_Ansible-informational?style=for-the-badge&logo=ansible&logoColor=white&color=EE0000)
![](https://img.shields.io/badge/-Terraform-informational?style=for-the-badge&logo=terraform&logoColor=white&color=7B42BC)
![](https://img.shields.io/badge/-Puppet-informational?style=for-the-badge&logo=puppet&logoColor=white&color=FFAE1A)

### Build Tools
![](https://img.shields.io/badge/-NPM-informational?style=for-the-badge&logo=npm&logoColor=white&color=CB3837)
![](https://img.shields.io/badge/-Apache_Maven-informational?style=for-the-badge&logo=apachemaven&logoColor=white&color=C71A36)
![](https://img.shields.io/badge/-Gradle-informational?style=for-the-badge&logo=gradle&logoColor=white&color=02303A)
![](https://img.shields.io/badge/-Yarn-informational?style=for-the-badge&logo=yarn&logoColor=white&color=2C8EBB)



