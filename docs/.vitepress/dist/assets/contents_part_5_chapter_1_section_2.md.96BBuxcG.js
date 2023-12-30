import{_ as s,o as i,c as a,R as t}from"./chunks/framework.JgfdjA-K.js";const c=JSON.parse('{"title":"Section 2 CSS 사용","description":"","frontmatter":{},"headers":[],"relativePath":"contents/part/5/chapter/1/section/2.md","filePath":"contents/part/5/chapter/1/section/2.md"}'),h={name:"contents/part/5/chapter/1/section/2.md"},n=t(`<h1 id="section-2-css-사용" tabindex="-1">Section 2 CSS 사용 <a class="header-anchor" href="#section-2-css-사용" aria-label="Permalink to &quot;Section 2 CSS 사용&quot;">​</a></h1><p>캐스케이딩 스타일 시트를 사용하면 웹 게시자는 의미론적 HTML을 사용하여 논리적 문서 구조와 의미를 전달하는 동시에 그래픽 디자이너에게 각 HTML 요소의 시각적 표시 세부 사항을 완벽하게 제어할 수 있는 엄청난 이점을 유지할 수 있습니다. CSS는 Microsoft Word와 같은 워드 프로세싱 프로그램의 스타일 시트처럼 작동합니다. Word에서는 순위가 매겨진 헤드라인과 기타 스타일을 사용하여 문서를 구성한 다음 스타일을 변경하여 헤드라인의 각 인스턴스의 시각적 모양을 전체적으로 변경할 수 있습니다. CSS는 특히 웹 사이트의 모든 페이지가 공유하는 연결된 외부 스타일 시트를 사용하는 경우 동일한 방식으로 작동합니다. 예를 들어 모든 페이지가 동일한 마스터 CSS 파일에 연결되어 있는 경우 마스터에서 <code>&lt;h1&gt;</code> 스타일을 변경하여 사이트의 모든 <code>&lt;h1&gt;</code> 제목의 글꼴, 크기 및 색상을 변경할 수 있습니다. 스타일 시트.</p><p>계단식 스타일 시트를 사용하는 많은 사용자는 CSS를 사용하여 표준 HTML 구성 요소의 모양을 변경하는 방법을 알고 있지만 CSS의 강력한 계단식 기능에는 별로 주의를 기울이지 않습니다. CSS는 여러 CSS 파일에 분산된 관련 CSS 지침 세트가 모든 페이지에서 공유되는 매우 일반적인 스타일 및 레이아웃 지침에서 사이트의 소수 페이지만 공유할 수 있는 매우 구체적인 스타일까지 계단식으로 배열될 수 있는 확장 가능한 시스템입니다.</p><h2 id="_1-css-계단식-계층-구조" tabindex="-1">1. CSS 계단식 계층 구조 <a class="header-anchor" href="#_1-css-계단식-계층-구조" aria-label="Permalink to &quot;1. CSS 계단식 계층 구조&quot;">​</a></h2><p>CSS에는 모든 페이지에서 공유되는 일반 CSS 코드부터 특정 페이지 파일에 포함된 코드, 특정 HTML 태그에 포함된 코드에 이르기까지 중요성과 우선순위가 계단식으로 배열되는 여러 계층적 수준이 있습니다. 일반 페이지 코드는 공유 사이트 코드를 재정의하고, HTML 태그에 포함된 CSS 코드는 일반 페이지 코드를 재정의합니다. CSS 우선순위의 계층적 계단식 배열을 사용하면 전체 사이트에 대해 매우 일반적인 스타일을 설정할 수 있으며 필요한 경우 특정 섹션이나 페이지 스타일로 스타일을 재정의할 수도 있습니다.</p><h2 id="_2-여러-페이지에서-css를-공유함" tabindex="-1">2. 여러 페이지에서 CSS를 공유함 <a class="header-anchor" href="#_2-여러-페이지에서-css를-공유함" aria-label="Permalink to &quot;2. 여러 페이지에서 CSS를 공유함&quot;">​</a></h2><p>여러 CSS 파일이 사이트 전체에서 함께 작동할 수 있습니다. 모듈식 방식으로 함께 작동하는 여러 CSS 파일의 개념은 사이트 전체의 스타일을 제어하는 마스터 CSS 파일에 대한 링크를 통해 모두 코드를 공유하는 계단식 페이지 시스템의 핵심입니다. 이 시스템에는 분명한 이점이 있습니다. 모든 페이지가 동일한 마스터 CSS 파일을 공유하는 경우 마스터 CSS 파일의 모든 구성 요소 스타일을 변경할 수 있으며 사이트의 모든 페이지에 새로운 스타일이 표시됩니다. 예를 들어, 마스터 파일에서 <code>&lt;h1&gt;</code> 제목의 인쇄 스타일을 조정하면 사이트 전체의 모든 <code>&lt;h1&gt;</code> 제목이 새로운 모양을 반영하도록 변경됩니다.</p><p>복잡한 사이트에서 페이지 디자이너는 CSS 파일 그룹을 연결하여 사이트 스타일을 지정하는 경우가 많습니다. 여러 CSS 파일을 패키징하면 많은 실질적인 이점을 얻을 수 있습니다. 복잡한 사이트에서 CSS 코드는 수백 줄로 실행될 수 있으며 마스터 사이트 타이포그래피 스타일에서 기본 페이지 레이아웃 CSS와 같은 요소를 세분화하는 것이 더 실용적인 경우가 많습니다. CSS 파일에 쉽게 연결하고 마스터 CSS 레이아웃과 타이포그래피 스타일로 사이트의 모든 페이지를 제어할 수 있습니다.</p><p>CSS의 &quot;캐스케이드&quot;의 강력한 장점은 WordPress 및 Drupal과 같은 CMS 프로그램에서 사용하는 테마에 내장되어 있지만 두 프로그램 모두 테마의 특정 스타일을 조정하는 마스터 스타일 시트를 생성하여 테마 스타일에 대한 사용자 정의 변형을 만들 수도 있습니다. 사용하고 있는 테마. 예를 들어, WordPress 테마의 전체적인 모양과 느낌에 매우 만족할 수 있지만 모든 헤드라인에서 테마에 내장된 Arial 글꼴 대신 Tahoma 글꼴을 사용하기를 원할 수 있습니다. 대부분의 WordPress 테마에서는 자신만의 CSS를 추가하여 테마의 다양한 측면을 사용자 정의할 수 있습니다. 예를 들어 WordPress 대시보드에서 모양 &gt; 사용자 정의 &gt; CSS 메뉴를 참조하여 사용자 정의 CSS 목록에 액세스하세요. 사이트의 모든 헤더를 Tahoma로 변경하려면 사용자 정의 CSS 목록에 다음 줄을 추가하면 됩니다.</p><div class="language-CSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Tahoma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sans-serif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>스타일 시트의 &quot;계단식&quot; 덕분에 사용자 정의 시트의 모든 헤더 스타일(글꼴 크기, 두께, 색상, 간격 등)의 모든 측면을 지정할 필요가 없습니다. 스타일을 통해 사용자 정의 Tahoma 헤더가 캐스케이드되기 때문입니다. 마스터 테마 스타일 시트에서 다른 모든 헤더 속성을 상속합니다. 따라서 헤더는 모두 Tahoma 글꼴로 변경되지만 테마 헤더 크기 및 스타일의 다른 모든 측면은 동일하게 유지됩니다. Drupal CMS에는 사용자 정의 CSS 코드용 CSS &quot;인젝터&quot; 모듈을 통해 Drupal 테마의 CSS를 조정할 수 있는 유사한 시스템이 있습니다.</p><h2 id="_3-미디어-스타일-시트-및-반응형-css-스타일" tabindex="-1">3. 미디어 스타일 시트 및 반응형 CSS 스타일 <a class="header-anchor" href="#_3-미디어-스타일-시트-및-반응형-css-스타일" aria-label="Permalink to &quot;3. 미디어 스타일 시트 및 반응형 CSS 스타일&quot;">​</a></h2><p>CSS의 또 다른 장점은 디스플레이 화면이나 종이 인쇄에 특정한 미디어 스타일 시트를 사용하여 상황에 맞는 디자인을 제공할 수 있다는 것입니다. 미디어 스타일 시트를 사용하면 특히 종이 인쇄에 맞게 페이지 레이아웃을 조정할 수 있습니다. 인쇄 스타일 시트는 종종 헤더와 사이드바 탐색 요소를 삭제하고 페이지 콘텐츠를 강조하기 위해 웹 페이지 프레임을 제거합니다. 인쇄 스타일을 사용하면 인쇄된 문서를 읽는 사람이 포함된 링크의 전체 URL을 볼 수 있으므로 링크를 따라가려는 독자가 해당 URL을 참조할 수 있습니다.</p><p>마찬가지로, &quot;반응형&quot; CSS 스타일은 사용자 화면의 크기에 따라 탐색 및 콘텐츠 표시를 맞춤설정하며, CSS3 미디어 쿼리를 사용하여 사용자 디스플레이 화면의 최대 또는 최소 너비를 결정합니다. 이 간단한 예에서는 미디어 쿼리 문(<code>@media</code>)을 사용하여 작은 모바일 화면에서 왼쪽 탐색 사이드바를 숨깁니다.</p><div class="language-CSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    .left_sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>반응형 웹 디자인 기술에 대한 자세한 내용은 다음 장인 페이지 구조를 참조하세요.</p>`,16),e=[n];function p(l,k,r,S,d,o){return i(),a("div",null,e)}const C=s(h,[["render",p]]);export{c as __pageData,C as default};