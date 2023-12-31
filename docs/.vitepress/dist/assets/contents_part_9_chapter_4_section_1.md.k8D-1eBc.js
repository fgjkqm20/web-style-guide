import{_ as s,c as i,o as a,R as t}from"./chunks/framework.kkHJ_Qlh.js";const g=JSON.parse('{"title":"Section 1 운영 체제 서체 지정","description":"","frontmatter":{},"headers":[],"relativePath":"contents/part/9/chapter/4/section/1.md","filePath":"contents/part/9/chapter/4/section/1.md"}'),e={name:"contents/part/9/chapter/4/section/1.md"},n=t(`<h1 id="section-1-운영-체제-서체-지정" tabindex="-1">Section 1 운영 체제 서체 지정 <a class="header-anchor" href="#section-1-운영-체제-서체-지정" aria-label="Permalink to &quot;Section 1 운영 체제 서체 지정&quot;">​</a></h1><p><code>@font-face</code>웹 타이포그래피 는 CSS 요소(다음 섹션 참조)가 널리 지원되고 많은 타이포그래피 공급업체에서 웹 글꼴을 무료 및 유료로 제공하면서 지난 5년 동안 꽃을 피웠습니다 . 그러나 Times, Arial, Trebuchet, Georgia 및 Verdana와 같은 일반적인 운영 체제 글꼴을 사용해야 할 이유는 여전히 많습니다. 이러한 시스템 글꼴은 매우 친숙하더라도 읽기 쉬우며 빠르고 안정적으로 로드됩니다. 다운로드 가능한 웹 글꼴과 달리 시스템 글꼴은 페이지에 대역폭 부담을 추가하지 않습니다. 이는 빠른 응답의 장점이 표준 Mac OS X 및 Windows 글꼴 그룹을 고수하는 데 따른 미학적 제약보다 훨씬 클 수 있는 모바일용 페이지를 디자인할 때 중요한 이점이 될 수 있습니다.</p><p>브라우저는 제공한 순서대로 각 글꼴이 있는지 확인하므로 브라우저가 기본 글꼴을 적용하기 전에 &quot;Times New Roman, Georgia, Times&quot;와 같이 3~4개의 대체 글꼴을 지정할 수 있습니다. 안전을 위해 &quot;serif&quot;와 같은 일반 글꼴 지정으로 글꼴 선언을 끝낼 수 있습니다. 이렇게 하면 브라우저가 나열된 글꼴을 찾을 수 없는 경우 사용 가능한 세리프 글꼴로 텍스트를 표시합니다.</p><div class="language-CSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: “</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Times</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> New Roman”, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Georgia</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Times</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">serif</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Times New Roman과 같은 여러 단어로 된 글꼴 이름은 사양에서 따옴표 안에 표시되어야 합니다. 또한 아래 글꼴 예에서 &quot;Trebuchet&quot;과 &quot;Trebuchet ms&quot;는 동일한 서체이지만 글꼴 목록에서 지정하는 정확한 이름이 중요하다는 점에 유의하세요. Macintosh 및 Windows 사용자 모두가 Trebuchet 서체를 볼 수 있도록 하려면 글꼴 선언에 두 이름을 모두 사용하십시오.</p><div class="language-CSS vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: “</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Trebuchet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MS”, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Trebuchet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Verdana</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Arial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sans-serif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>문자 설정이 올바르게 작동하는지 확인하는 좋은 방법은 브라우저의 기본 비례 글꼴 설정을 의도한 글꼴과 확실히 다른 것으로 설정하는 것입니다. 예를 들어 문서에서 Courier를 사용하지 않는 경우 브라우저의 기본 글꼴을 Courier로 설정하세요. 페이지를 볼 때 Courier에 표시되는 모든 내용은 적절하게 표시되어서는 안 됩니다.</p>`,7),h=[n];function p(l,k,r,o,c,d){return a(),i("div",null,h)}const C=s(e,[["render",p]]);export{g as __pageData,C as default};
