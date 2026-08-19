# 서정민 포트폴리오 배포 안내

이 폴더는 `index.html`과 `assets/`만으로 동작하는 **정적 HTML 포트폴리오**입니다. 별도 빌드나 서버 프로그램 없이 정적 호스팅 서비스에 폴더 내용을 올리면 바로 공개할 수 있습니다.

> 압축 파일을 풀었을 때 `index.html`과 `assets` 폴더가 같은 위치에 있도록 유지해야 합니다. `index.html`만 따로 옮기면 이미지와 스타일이 보이지 않습니다.

## 가장 쉬운 방법: Netlify Drop

1. ZIP 파일의 압축을 풉니다.
2. [Netlify Drop](https://app.netlify.com/drop)에 접속합니다.
3. `seo-jungmin-portfolio-html-highres-v10` **폴더 자체**를 화면에 끌어다 놓습니다.
4. 배포가 완료되면 생성된 공개 주소를 확인합니다.
5. 수정본을 다시 올릴 때도 같은 방식으로 새 폴더를 배포하면 됩니다.

Netlify는 정적 사이트 폴더를 드래그 앤 드롭 방식으로 배포할 수 있으며, 프로젝트 공개 여부를 선택할 수 있습니다.[^netlify]

## 수정 이력까지 관리하는 방법: GitHub Pages

GitHub 계정이 있다면 이 방식을 권장합니다. 변경 이력이 남고, 같은 주소로 업데이트하기 편리합니다.

1. GitHub에서 새 저장소를 만듭니다. 예: `seo-jungmin-portfolio`.
2. 이 폴더 안의 **내용물**(`index.html`, `assets`, `README_배포안내.md`)을 저장소 최상위에 업로드합니다.
3. 저장소의 **Settings → Pages**로 이동합니다.
4. **Build and deployment**에서 **Deploy from a branch**를 선택합니다.
5. `main` 브랜치와 `/ (root)`를 선택해 저장합니다.
6. GitHub가 안내하는 공개 주소를 확인합니다. 일반 프로젝트 저장소의 기본 주소 형식은 `https://<사용자명>.github.io/<저장소명>/`입니다.[^github-pages]

GitHub Pages는 저장소의 HTML·CSS·JavaScript 파일을 정적 웹사이트로 게시합니다.[^github-pages]

## 폴더 업로드 방식의 대안: Vercel Drop

[Vercel Drop](https://vercel.com/drop)에 이 폴더를 드래그 앤 드롭한 뒤 프로젝트 이름을 정하고 **Deploy**를 선택해도 됩니다. 정적 HTML 파일은 빌드 과정 없이 그대로 배포됩니다.[^vercel]

## 공개 전 확인할 점

| 항목 | 확인 내용 |
| --- | --- |
| 개인정보 | 학교·생년월일·사진 등 공개해도 되는 정보인지 확인합니다. |
| 외부 링크 | 메이플 월드, 헬로메이플, YouTube 링크가 새 창에서 열리는지 확인합니다. |
| 사용자 도메인 | 도메인을 보유했다면 각 서비스의 Custom Domain 설정에서 연결할 수 있습니다. |
| 업데이트 | GitHub Pages는 파일을 다시 올린 뒤 배포를 기다리고, Netlify/Vercel은 새 폴더를 업로드해 갱신합니다. |

[^netlify]: [Netlify 공식 안내](https://www.netlify.com/)
[^github-pages]: [GitHub Pages 공식 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) 및 [빠른 시작 가이드](https://docs.github.com/en/pages/quickstart)
[^vercel]: [Vercel 배포 공식 문서](https://vercel.com/docs/deployments)
