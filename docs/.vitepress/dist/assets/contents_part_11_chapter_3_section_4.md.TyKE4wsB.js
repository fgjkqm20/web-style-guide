import{_ as t,c as e,o as a,R as o}from"./chunks/framework.kkHJ_Qlh.js";const h=JSON.parse('{"title":"Section 4 화면에 맞게 이미지 최적화","description":"","frontmatter":{"next":{"text":"Part 12 비디오","link":"/contents/part/12/video"}},"headers":[],"relativePath":"contents/part/11/chapter/3/section/4.md","filePath":"contents/part/11/chapter/3/section/4.md"}'),i={name:"contents/part/11/chapter/3/section/4.md"},p=o('<h1 id="section-4-화면에-맞게-이미지-최적화" tabindex="-1">Section 4 화면에 맞게 이미지 최적화 <a class="header-anchor" href="#section-4-화면에-맞게-이미지-최적화" aria-label="Permalink to &quot;Section 4 화면에 맞게 이미지 최적화&quot;">​</a></h1><p>컴퓨팅과 웹 세계는 현재 기존의 72~96ppi(선형 인치당 픽셀 수) 또는 1x 디스플레이 표준과 최신 &quot;레티나&quot; 또는 2x 고해상도 디스플레이 화면 사이에 어색한 양다리를 걸치고 있습니다. 돌이켜보면 72~96ppi 디스플레이 해상도가 얼마나 오랫동안 지속되었는지는 놀랍습니다. 웹이 존재한 지 25년 동안 컴퓨팅 분야의 거의 모든 것이 엄청나게 바뀌었지만 몇 가지 요인이 결합하여 오랫동안 72~96ppi 표준을 고수하게 되었습니다.</p><p>우리는 오래된 대형 음극선관 모니터에서 매우 높은 해상도를 표시할 수 있는 새로운 평면 스크린에 이르기까지 디스플레이 기술에 큰 변화를 불러왔습니다. 그러나 평면 스크린은 시장에 처음 등장했을 때 매우 비쌌기 때문에 새로운 스크린의 비용을 합리적으로 유지하기 위해 기존 72~96ppi 표준을 고수했습니다. 성숙한 평면 스크린 기술과 모바일 장치에서도 증가하는 컴퓨팅 성능의 결합으로 이제 훨씬 더 높은 화면 해상도가 가능해졌으며 향후 몇 년 동안 200ppi 이상의 화면이 모든 종류의 컴퓨팅 디스플레이의 새로운 표준이 될 것입니다.</p><p>모바일 컴퓨팅의 증가와 디스플레이 해상도의 변화로 인해 웹 개발자는 그래픽을 처리하는 데 있어 두 가지 주요 과제에 직면하게 되었습니다.</p><ul><li><strong>효율성:</strong> 다양한 컴퓨팅 장치 및 화면 크기에 최적의 크기의 이미지를 제공하는 방법</li><li><strong>해상도:</strong> 구형 1x 화면과 최신 Retina 화면을 가장 잘 구별하고 최신 디스플레이에 훨씬 더 높은 품질의 그래픽을 제공하는 방법</li></ul><p>좋은 소식은 HTML5 및 CSS3 표준이 이미 웹에서 더 나은 그래픽으로 전환하는 데 필요한 많은 도구를 제공한다는 것입니다. 그러나 기술은 여전히 ​​전환 중이며 브라우저 제조업체가 페이지가 어떤 종류의 화면에 표시되었는지 신속하게 식별하고 그래픽을 제공하는 가장 효율적인 수단을 신속하게 식별하는 데 필요한 새로운 도구를 완전히 구현할 때까지 몇 년이 걸릴 것입니다. 모바일 및 데스크톱 상황 모두.</p><h2 id="_1-능률" tabindex="-1">1. 능률 <a class="header-anchor" href="#_1-능률" aria-label="Permalink to &quot;1. 능률&quot;">​</a></h2><p>반응형 웹 디자인(rwd)은 모든 화면 크기에 잘 맞는 웹 콘텐츠를 제작하기 위한 개념적 프레임워크와 많은 도구를 제공했습니다. CSS에 지정된 배경 및 핵심 페이지 프레임워크 그래픽의 경우 다양한 화면 해상도를 처리하는 해결책은 간단합니다. 소형, 중형, 대형 화면에 대한 다양한 CSS &quot;중단점&quot; 해법에서 소형, 중형, 대형 버전을 지정할 수 있습니다. 각 화면 너비 범위에 적합한 크기의 비트맵 그래픽입니다. 웹 디자이너는 어떤 해상도에서도 잘 작동하는 아이콘 글꼴 및 SVG 그래픽과 같은 벡터 기반 그래픽을 사용하거나 추가 그래픽 파일이 전혀 필요하지 않은 CSS 기반 그래픽 효과를 사용할 수도 있습니다. 능률 이로 인해 이미지 &lt;img&gt; 태그로 지정된 페이지 콘텐츠 내에 인라인으로 배치된 HTML 기반 그래픽에 대한 응답을 최적화하는 방법에 대한 질문이 남습니다. 운 좋게도 HTML5 사양은 이미 이 문제에 대한 유용한 솔루션을 제안했습니다. 즉, 화면 너비에 맞춰 새로운 &lt;picture&gt; 요소 내에서 다양한 이미지 크기 대안을 지정하는 수단입니다(그림 11.15). source 속성을 사용하면 화면의 최소 너비(CSS 픽셀 단위)에 따라 조건부로 제공할 수 있는 이미지 세트를 지정할 수 있습니다. &lt;picture&gt; 요소에는 항상 기존 이미지 요소인 &lt;img&gt;도 포함되어야 합니다. 내장된 &lt;img&gt; 태그는 &lt;picture&gt; 요소를 지원하지 않는 브라우저에 대한 적절한 대체 기능을 제공합니다. &lt;picture&gt; 요소가 지원되지 않는 경우 브라우저는 내장된 &lt;img&gt; 요소를 사용하므로 모든 사람이 최소한 중간 해상도의 이미지를 볼 수 있습니다.</p><h2 id="_2-해상도-및-픽셀-밀도" tabindex="-1">2. 해상도 및 픽셀 밀도 <a class="header-anchor" href="#_2-해상도-및-픽셀-밀도" aria-label="Permalink to &quot;2. 해상도 및 픽셀 밀도&quot;">​</a></h2><p>고해상도 화면 미디어로 전환하는 데 있어 두 번째 주요 과제는 올바른 이미지를 올바른 화면으로 보내는 것입니다. 중간 해상도 이미지를 1x 장치(화면 크기에 상관없이)에 제공하고 고해상도 이미지를 2x 또는 망막 화면에 제공하는 것입니다. 모바일 장치에서와 같이 큰 이미지는 페이지 성능에 영향을 미칠 수 있습니다.</p><p>웹 개발자가 직면하고 처리한 당면 과제 중 하나는 새로운 레티나 스크린으로 인해 물리적 또는 장치 픽셀 수가 두 배 이상 증가했을 때 크기와 거리를 어떻게 설명할 것인가입니다. 72~96ppi 화면의 이전 1x 세계에서는 답이 분명했습니다. 이미지의 한 픽셀은 디스플레이 화면의 물리적 픽셀 한 개와 직접적으로 동일합니다. 갑자기 디스플레이 픽셀의 밀도를 두 배로 늘리고 다른 변경 사항을 적용하지 않으면 모든 이미지의 픽셀 수가 동일하지만 2x 화면에서는 크기가 절반으로 보이고 레티나 화면에서는 텍스트도 비슷하게 소형화됩니다.</p><p>이 퍼즐에 대한 답은 HTML 및 CSS로 지정된 픽셀 번호가 더 이상 물리적 또는 장치 픽셀과 1:1 관계를 갖지 않는 가상 측정입니다. 이러한 &quot;CSS 픽셀&quot;은 이전 1x 화면의 측정값과 어느 정도 동일합니다. CSS 픽셀과 화면 픽셀의 일대일 관계 대신에 하나의 &quot;CSS 픽셀&quot;은 실제로 2x 화면에서 4개의 장치 픽셀이 차지하는 영역을 나타냅니다(그림 11.16). 새로운 고해상도 화면의 타이포그래피의 경우 반응형 웹 디자인은 이미 em 단위의 상대적 측정값을 사용합니다. 여기서 em 하나는 화면 해상도에 관계없이 대략 16포인트 유형과 동일합니다.</p><p>마찬가지로 HTML 또는 CSS 픽셀로 지정된 비트맵 이미지 크기는 이제 가상 픽셀을 사용합니다. 기존의 1x 디스플레이에서 이미지 픽셀 하나는 화면 픽셀 하나와 같습니다. Retina 또는 2x 화면에서 각 가상 &quot;CSS 픽셀&quot;은 약 4개의 장치 픽셀과 동일합니다(그림 11.17).</p><p>웹 세계는 전환 중이며 Retina 또는 2x 화면을 식별하고 해당 화면에만 고해상도 이미지를 제공하는 데 사용할 수 있는 방법은 현재 매우 어리 석습니다. 여러 JavaScript 또는 서버 크기 기술이 화면 간의 격차를 메우기 위해 경쟁하고 있습니다. 우리에게 필요한 것과 현재의 웹 브라우저가 안정적으로 제공할 수 있는 것.</p><p>운 좋게도 장기적인 해결책은 분명하며 이미 HTML5 및 CSS3 코드 표준의 일부이거나 제안되었습니다. 대부분의 반응형 웹 디자인의 기반이 되는 @media 쿼리 태그는 단순히 화면 너비를 결정하는 것 이상의 역할을 할 수 있습니다. 미디어 쿼리는 디스플레이의 해상도와 디스플레이의 해상도 대 물리적 크기도 결정할 수 있습니다(적어도 이론적으로는). HTML5 srcset 속성과 &lt;picture&gt; 요소는 적어도 이론적으로는 주어진 화면 크기에 맞는 크기의 이미지를 자동으로 보낼 수 있습니다. 웹 브라우저 제조업체가 이러한 중요한 이미지 품질 도구를 얼마나 빨리 채택하고 얼마나 일관되게 구현하는지에 따라 많은 것이 달라집니다.</p>',15),r=[p];function n(c,s,l,S,_,u){return a(),e("div",null,r)}const x=t(i,[["render",n]]);export{h as __pageData,x as default};
