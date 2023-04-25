# hello react

react spa 만들고 github pages에 올리기

## gh-pages 설치

```sh
yarn add -D gh-pages
```

## package.json 수정

```jsonc package.json
{
  // ...
  "scripts": {
    // ...
    "deploy": "gh-pages -d build"
  },
  // ...
  "homepage": "https://chinsun9.github.io/hello-react/"
}
```

- `deploy` 스크립트 추가, `homepage` 필드를 추가한다
- 이때 `homepage`필드의 값은
- `https://{username}.github.io/{repo}/`로 한다

## Router에 basename 추가

```jsx index.js
ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
```

- 최상위 Router에 `basename={process.env.PUBLIC_URL}`을 추가한다

## 404.html 추가

- https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html
- `public/404.html`을 만들고 위 내용을 추가한다
- 이때 다른점은 `pathSegmentsToKeep` 값을 1로 한다

## index.html 수정

- https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html
- `public/index.html` head 부분에 위 `<!-- Start Single Page Apps for GitHub Pages -->` 에 해당하는 스크립트 부분을 추가한다

## build

```
yarn build
```

## deploy

```
yarn deploy
```

- gh-pages 브랜치가 생성되어 있고,
- 깃허브 페이지 기능이 활성화되어있는 것을 확인할 수 있을 것이다

## 참고

- https://github.com/rafgraph/spa-github-pages
