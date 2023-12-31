import{_ as s,c as i,o as a,R as t}from"./chunks/framework.kkHJ_Qlh.js";const E=JSON.parse('{"title":"Section CSS @font-face 요소와 함께 웹 기반 글꼴 사용","description":"","frontmatter":{},"headers":[],"relativePath":"contents/part/9/chapter/4/section/2.md","filePath":"contents/part/9/chapter/4/section/2.md"}'),e={name:"contents/part/9/chapter/4/section/2.md"},n=t(`<h1 id="section-css-font-face-요소와-함께-웹-기반-글꼴-사용" tabindex="-1">Section CSS @font-face 요소와 함께 웹 기반 글꼴 사용 <a class="header-anchor" href="#section-css-font-face-요소와-함께-웹-기반-글꼴-사용" aria-label="Permalink to &quot;Section CSS @font-face 요소와 함께 웹 기반 글꼴 사용&quot;">​</a></h1><p>CSS3에 대한 폭넓은 지원으로 <code>@font-face</code>마침내 웹 커뮤니케이션에 모든 범위의 인쇄 가능성이 도입되었습니다. 브라우저 지원이 아직 완벽하지는 않지만(여전히 고려해야 할 여러 글꼴 파일 형식이 있음) Adobe Edge Fonts, Font Squirrel, Google Fonts, TypeCast 및 TypeKit과 같은 웹 기반 인쇄 서비스를 통해 이제 거의 모든 주요 주류 서체를 사용할 수 있습니다. 귀하의 웹 작업. 웹 글꼴은 사이트 파일 또는 cms와 함께 웹 서버의 로컬 파일일 수도 있고, <code>@font-face</code>Google을 직접 참조하는 태그를 사용하여 Google Fonts와 같은 온라인 글꼴 소스에서 &quot;라이브&quot;로 참조될 수도 있습니다.</p><div class="language-HTML vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fonts.googleapis.com/css?family=Open+Sans&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-CSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fonts.googleapis.com/css?family=Open+Sans</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-CSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ‘Open Sans’, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sans-serif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Google, Adobe 및 Font Squirrel은 모두 일부 글꼴을 무료로 제공합니다. Google의 거대하고 계속 성장하고 있는 웹 글꼴 라이브러리는 완전히 무료로 사용할 수 있습니다.</p><p>광범위한 주류 및 장식 서체를 자유롭게 사용할 수 있다는 장점은 분명하지만, 웹 작업에 너무 많은 웹 글꼴을 사용하면 몇 가지 중요한 미적 및 성능상의 단점이 있습니다.</p><h2 id="_1-웹-글꼴의-성능-영향" tabindex="-1">1. 웹 글꼴의 성능 영향 <a class="header-anchor" href="#_1-웹-글꼴의-성능-영향" aria-label="Permalink to &quot;1. 웹 글꼴의 성능 영향&quot;">​</a></h2><p>대부분의 웹 글꼴은 페이지가 독자의 브라우저에 로드될 때 Google Fonts와 같은 소스에서 즉시 참조되어야 하며 Google Fonts와 같은 표준 웹 글꼴은 각각 30~50KB 또는 중간 크기 그래픽 크기일 수 있습니다. JPEG 형식으로. <code>@font-face</code>페이지 로딩이 눈에 띄게 느려지기 전에 너무 많은 요청이 필요하지 않습니다 . 이미 많은 이미지가 포함된 페이지는 특히 로드 속도가 느려지며, 기호 글꼴을 사용하여 페이지 디자인에 아이콘 그래픽을 제공하는 경우 로드 속도가 더욱 느려집니다. 이는 디자인 작업에 여러 글꼴을 사용할 수 없다는 의미는 아니지만 페이지에 이미 그래픽 콘텐츠가 로드되어 있는 경우 Google의 PageSpeed ​​또는 Pingdom(tools.pingdom.com)과 같은 온라인 속도 테스트를 통해 지속적으로 확인하는 것이 좋습니다. 웹 글꼴 작업이 성능에 미치는 영향을 확실히 이해해야 합니다.</p><h2 id="_2-인쇄상의-미학" tabindex="-1">2. 인쇄상의 미학 <a class="header-anchor" href="#_2-인쇄상의-미학" aria-label="Permalink to &quot;2. 인쇄상의 미학&quot;">​</a></h2><p>숙련된 그래픽 디자이너나 웹 타이포그래피 전문가가 아니더라도 웹 타이포그래피를 탐색하여 페이지의 형식과 기능을 개선할 수 있습니다. TypeCast(typecast.com)와 같은 웹 기반 서비스를 사용하면 특정 조합을 결정하기 전에 다양한 웹 글꼴 옵션을 쉽고 빠르게 탐색할 수 있습니다. 인쇄상의 결정을 내리는 데 익숙하지 않은 디자이너가 아닌 경우 몇 가지 기본 고려 사항은 다음과 같습니다.</p><ul><li>단순하게 유지하고 사이트에 서체를 2개 이하로 사용하세요. 이는 종종 주요 제목에 대한 서체를 선택하고 주요 텍스트 블록에 대해 대조되는 서체를 선택하는 것을 의미합니다. 디자이너는 종종 헤드라인과 주요 제목에 산세리프 글꼴을 선택하고 기본 텍스트 블록에 세리프 글꼴을 선택하거나 그 반대의 경우도 있습니다. 하나의 구성표 또는 다른 구성표를 선택하고 더 이상 서체를 추가하지 마십시오. 특히 서체를 쉽게 조정할 수 있는 세리프/산세리프 조합이 여러 가지 있습니다. Adobe의 Stone 제품군 산세리프와 세리프는 Adobe의 Myriad 및 Minion 서체와 마찬가지로 조합하여 아름답게 작동하도록 디자인되었습니다.</li><li>세리프체와 산세리프체 중 어느 쪽이 더 읽기 쉬운지에 대한 끝없는 (그리고 무의미한) 논쟁에 얽매이지 마십시오. 그렇게 간단한 제안을 뒷받침할 신뢰할 수 있는 데이터는 없습니다. 읽기 쉬운 세리프체와 산세리프체 글꼴이 있고, 두 범주 모두 끔찍한 글꼴이 있습니다.</li><li>주류에 머물러 라. 친숙하고 수십 년 동안 널리 사용되어 온 글꼴을 사용하십시오. 이러한 글꼴은 시간의 시험을 견디어 냈고 귀하를 당황하게 하지 않을 것입니다. Georgia, Times, Minion, Palatino, Goudy 및 Garamond와 같은 주요 세리프 글꼴은 아름답고 기능적입니다. Myriad(이 책 전체에서 사용됨), Arial, Helvetica 및 Syntax와 같은 산세리프 글꼴은 모든 일반 글꼴 크기에서 매우 읽기 쉽습니다.</li><li>장식적이거나 유쾌하거나 특이한 서체 또는 표시용 서체를 사용하지 마십시오. 항상. 마침표.</li><li>간단한 시각적 및 활자체 &#39;어휘&#39;를 설정하고 이를 고수하세요. 모든 심각한 프로젝트에는 예상하지 못한 문제가 있을 수 있으며, 새로운 종류의 활자 처리, 비정상적으로 크거나 작은 활자 크기 또는 기타 인쇄 상의 이상 현상을 추가해야 하는 상황이 있을 수 있습니다. 경험이 풍부한 모든 디자이너는 프로그램과 선택한 도구를 고수하고 이러한 기본 규칙을 적용하여 문제를 깊이 생각하는 것이 거의 항상 최선이라는 것을 알고 있습니다. 이렇게 하면 새로운 도전이 발생할 때마다 고유한 그래픽이나 글꼴로 &quot;날개&quot;를 치고 싶은 유혹을 느끼지 않게 됩니다.</li></ul>`,12),o=[n];function l(p,h,c,d,r,k){return a(),i("div",null,o)}const u=s(e,[["render",l]]);export{E as __pageData,u as default};
