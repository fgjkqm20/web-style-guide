import{_ as t,o as e,c as a,R as o}from"./chunks/framework.JgfdjA-K.js";const T=JSON.parse('{"title":"Section 3 최적의 접근성과 가독성을 위한 인코딩 페이지","description":"","frontmatter":{},"headers":[],"relativePath":"contents/part/6/chapter/1/section/3.md","filePath":"contents/part/6/chapter/1/section/3.md"}'),c={name:"contents/part/6/chapter/1/section/3.md"},n=o('<h1 id="section-3-최적의-접근성과-가독성을-위한-인코딩-페이지" tabindex="-1">Section 3 최적의 접근성과 가독성을 위한 인코딩 페이지 <a class="header-anchor" href="#section-3-최적의-접근성과-가독성을-위한-인코딩-페이지" aria-label="Permalink to &quot;Section 3 최적의 접근성과 가독성을 위한 인코딩 페이지&quot;">​</a></h1><p>HTML 소스 순서는 사이트 ID, 탐색, 기본 콘텐츠, 관련 콘텐츠, 바닥글 정보 등의 요소가 문서 소스 코드에 나타나는 순서입니다. 일반적으로 웹페이지 독자는 원시 HTML 코드를 볼 수 없습니다. 그는 웹 브라우저 창에서 최소한 스타일이 지정된 HTML 버전을 볼 수 있으며 일반적으로 웹 사이트에는 완성된 웹 페이지에서 기대하는 레이아웃과 타이포그래피를 생성하는 추가 사용자 정의 CSS 코드가 있습니다.</p><p>적절한 HTML 소스 코드 순서는 여러 가지 이유로 중요합니다.</p><ul><li>사이트의 기술적 오류로 인해 일반적인 CSS 스타일이 존재하지 않거나 때로는 모바일 또는 무선 상황에서 대역폭이 너무 제한되어 HTML이 스타일 없이 브라우저에 표시되는 경우가 있습니다. 소스 HTML이 논리적 순서(그림 6.4)로 되어 있다면 독자는 비록 매우 평범한 형식이더라도 여전히 콘텐츠와 링크에 액세스할 수 있어야 합니다.</li><li>시각 장애인을 위한 웹 브라우저는 특정 논리적 코드 순서를 기대하고 사이트의 시각 장애인 사용자가 헤더와 탐색 영역을 빠르게 건너뛰고 기본 페이지 콘텐츠로 이동할 수 있으므로 접근성에 대한 소스 순서가 중요합니다.</li><li>기본 사이트 탐색 링크와 기본 페이지 콘텐츠를 소스 순서에서 높게 유지하면 검색 엔진 최적화에 도움이 됩니다. 헤더 영역에 CSS 또는 JavaScript가 너무 많은 페이지는 기본 페이지 콘텐츠를 HTML 파일에 너무 깊이 묻어 검색 엔진 스파이더가 볼 수 없거나 과도한 코드로 인해 페이지 콘텐츠의 순위를 낮출 수 있습니다.</li></ul><p>최신 웹 페이지에서는 스타일 시트를 사용하여 웹 페이지에 콘텐츠, 그래픽, 탐색 요소를 배치하고 HTML 콘텐츠와 시각적 스타일을 명확하게 구분합니다.</p><h2 id="_1-페이지-요소의-선택적-표시" tabindex="-1">1. 페이지 요소의 선택적 표시 <a class="header-anchor" href="#_1-페이지-요소의-선택적-표시" aria-label="Permalink to &quot;1. 페이지 요소의 선택적 표시&quot;">​</a></h2><p>문서 디자인의 또 다른 측면은 다양한 컨텍스트와 관련된 요소를 포함하고 요소가 적절하게 표시되거나 표시되지 않도록 문서를 코딩하는 것입니다. 예를 들어 탐색 링크는 모든 화면 디자인의 기본이지만 종이에 인쇄하면 도움이 되지 않습니다. 선택적 표시용으로 코딩된 문서의 경우 인쇄 스타일 시트의 CSS를 사용하여 페이지의 인쇄 버전에서 헤더 또는 사이드바 탐색 링크를 숨길 수 있습니다.</p><p>인쇄할 때 페이지로 돌아가거나 기사를 인용할 때 전체 링크 URL을 보는 것이 도움이 될 수 있으며, 이는 인쇄용 CSS 스타일을 사용하여 쉽게 수행할 수 있습니다. 인쇄 CSS 스타일 시트는 탐색 링크, 그래픽 페이지 머리글, 바닥글 정보와 같은 HTML 요소를 숨기는 경우가 많습니다. 이로 인해 페이지가 훨씬 더 깔끔하게 인쇄되지만, 프린터에서 출력되는 내용이 컴퓨터 화면에서 보는 것과 너무 달라 독자들이 혼란스러워하는 경우도 있습니다.</p><p>HTML5, CSS3 및 반응형 웹 디자인 기술 에 대한 최고의 참고 서적을 보려면 이 장 끝에 있는 권장 도서 섹션을 참조하세요.</p>',9),i=[n];function r(s,p,_,l,S,d){return e(),a("div",null,i)}const m=t(c,[["render",r]]);export{T as __pageData,m as default};
