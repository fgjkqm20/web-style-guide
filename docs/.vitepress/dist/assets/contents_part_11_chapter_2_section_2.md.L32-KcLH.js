import{_ as t,c as e,o,R as a}from"./chunks/framework.kkHJ_Qlh.js";const i="/web-style-guide/assets/6.Gf8ZwKS7.png",p="/web-style-guide/assets/8.pBcI3kD0.png",F=JSON.parse('{"title":"Section 2 이미지 파일 형식 이해","description":"","frontmatter":{},"headers":[],"relativePath":"contents/part/11/chapter/2/section/2.md","filePath":"contents/part/11/chapter/2/section/2.md"}'),G={name:"contents/part/11/chapter/2/section/2.md"},r=a('<h1 id="section-2-이미지-파일-형식-이해" tabindex="-1">Section 2 이미지 파일 형식 이해 <a class="header-anchor" href="#section-2-이미지-파일-형식-이해" aria-label="Permalink to &quot;Section 2 이미지 파일 형식 이해&quot;">​</a></h1><p>기본 웹 파일 형식은 GIF(“jiff”로 발음), JPEG(“jay-peg”) 및 PNG(“ping”) 파일의 래스터 이미지입니다. 세 가지 일반적인 웹 그래픽 형식은 모두 소위 비트맵 그래픽으로, 수천 개의 작은 색상 정사각형 그림 요소 또는 픽셀로 구성된 체커보드 격자로 구성됩니다. 비트맵 파일은 휴대전화 및 디지털카메라에서 생성되는 친숙한 유형의 파일이며 Adobe의 Photoshop 또는 Elements, Corel의 Paint Shop Pro 및 Painter 등과 같이 널리 사용되는 도구를 사용하여 웹용으로 쉽게 생성, 편집, 크기 조정 및 최적화됩니다. 사진 편집 프로그램.</p><p>인터넷을 통한 효율적인 전달을 위해 거의 모든 웹 그래픽이 압축되어 파일 크기를 최대한 작게 유지합니다. 대부분의 웹사이트는 GIF와 JPEG 이미지를 모두 사용합니다. 이러한 파일 형식 중에서 선택하는 것은 주로 다음을 평가하는 문제입니다.</p><ul><li>이미지의 특성(이미지가 부드러운 색조 전환의 &quot;사진&quot; 모음입니까, 아니면 딱딱한 가장자리와 선이 있는 도식적 이미지입니까?)</li><li>다양한 종류의 파일 GIF 압축이 이미지 품질에 미치는 영향</li><li>좋아 보이는 가장 작은 파일 크기를 생성하는 압축 기술의 효율성</li></ul><h2 id="_1-gif" tabindex="-1">1. GIF <a class="header-anchor" href="#_1-gif" aria-label="Permalink to &quot;1. GIF&quot;">​</a></h2><p>CompuServe 정보 서비스는 1980년대에 데이터 네트워크를 통해 이미지를 전송하는 효율적인 수단으로 GIF(그래픽 교환 형식)를 대중화했습니다. 1990년대 초 World Wide Web의 최초 디자이너들은 효율성과 널리 사용되는 친숙함을 위해 GIF를 채택했습니다. 웹상의 많은 이미지는 GIF 형식으로 되어 있으며 그래픽을 지원하는 거의 모든 웹 브라우저는 GIF 파일을 표시할 수 있습니다. GIF 파일에는 &quot;무손실&quot; 압축 방식이 포함되어 있어 품질 저하 없이 파일 크기를 최소로 유지합니다. 그러나 GIF 파일은 8비트 그래픽이므로 256색만 수용할 수 있습니다.</p><p>GIF 파일 형식은 상대적으로 기본적인 형태의 파일 압축(Lempel Zev Welch 또는 lzw)을 사용하여 데이터 손실이나 이미지 왜곡 없이 데이터 저장의 비효율성을 줄여줍니다. lzw 압축 방식은 로고 및 다이어그램과 같은 균일한 색상의 넓은 필드가 있는 이미지를 압축하는 데 가장 적합합니다. 다양한 색상과 복잡한 질감이 포함된 복잡한 &quot;사진&quot; 사진을 압축하는 데는 훨씬 덜 효율적입니다.</p><figure><img id="figure6" alt="" src="'+i+'"><figcaption> 그림 6 </figcaption></figure><p>lzw 압축의 특성을 활용하여 효율성을 높이고 GIF 그래픽의 크기를 줄일 수 있습니다. 전략은 GIF 이미지의 색상 수를 필요한 최소한으로 줄이고 이미지를 표현하는 데 필요하지 않은 색상을 제거하는 것입니다. GIF 그래픽은 256개 이상의 색상을 가질 수 없지만 그보다 적을 수도 있습니다. 색상이 적은 이미지는 lzw 압축에서 더 효율적으로 압축됩니다. 예를 들어 Photoshop에서 GIF 그래픽을 만들 때 모든 파일을 256색으로 자동 저장하지 마세요. 간단한 GIF 이미지는 8, 16 또는 32색에서 괜찮아 보일 수 있으며 파일 크기를 상당히 절약할 수 있습니다. GIF 그래픽의 효율성을 최대화하려면 좋은 결과를 얻을 수 있는 최소 색상 수를 사용하십시오.</p><p>기존(비인터레이스) GIF 그래픽은 위에서 아래로 한 번에 한 줄의 픽셀을 다운로드하며, 브라우저는 이미지가 화면에 점진적으로 구축되면서 이미지의 각 줄을 표시합니다. 인터레이스 GIF 파일에서 이미지 데이터는 이 기능을 지원하는 브라우저가 파일을 다운로드하는 동안 화면에 전체 크기 GIF 그림의 저해상도 버전을 생성할 수 있는 형식으로 저장됩니다. 어떤 사람들은 인터레이스의 &quot;흐릿하면서도 선명한&quot; 애니메이션 효과가 시각적으로 매력적이라고 ​​생각하지만, 인터레이스의 가장 중요한 이점은 사진이 브라우저에 다운로드되는 동안 사용자에게 전체 사진의 미리 보기를 제공한다는 것입니다.</p><p>인터레이스는 200×100픽셀 이상의 일러스트레이션과 같은 큰 GIF 이미지에 가장 적합합니다. 인터레이스는 탐색 모음, 버튼, 아이콘과 같은 작은 GIF 그래픽에는 적합하지 않습니다. 이러한 작은 그래픽을 기존(비인터레이스) GIF 형식으로 유지하면 화면에 훨씬 빠르게 로드됩니다. 일반적으로 인터레이스는 평균 GIF 그래픽의 파일 크기에 큰 영향을 미치지 않습니다.</p><p>GIF 형식을 사용하면 GIF의 색상 조회 테이블에서 투명한 색상을 선택할 수 있습니다. Photoshop과 같은 이미지 편집 소프트웨어를 사용하여 GIF 그래픽의 색상 팔레트에서 단일 색상을 선택하여 투명하게 만들 수 있습니다. 일반적으로 투명도를 위해 선택된 색상은 그래픽의 배경색입니다. 불행하게도 투명 속성은 선택적이지 않습니다. 색상을 투명하게 만들면 해당 색상을 공유하는 그래픽의 모든 픽셀도 투명해지기 때문에 예상치 못한 결과가 발생할 수 있습니다.</p><h2 id="_2-jpeg" tabindex="-1">2. JPEG <a class="header-anchor" href="#_2-jpeg" aria-label="Permalink to &quot;2. JPEG&quot;">​</a></h2><p>그래픽 파일 크기를 최소화하기 위해 웹에서 일반적으로 사용되는 다른 그래픽 파일 형식은 JPEG(Joint Photographic Experts Group) 압축 방식입니다. GIF 그래픽과 달리 JPEG 이미지는 각 픽셀에 최소 24비트의 메모리를 할당하는 풀 컬러 이미지로, 결과적으로 1,680만 색상을 통합할 수 있는 이미지를 생성합니다.</p><p>JPEG 이미지는 사진가, 예술가, 그래픽 디자이너, 의료 영상 전문가, 미술사학자 및 이미지 품질과 색상 충실도가 중요한 기타 그룹에서 광범위하게 사용됩니다. &quot;프로그레시브 JPEG&quot;라는 파일 형식은 JPEG 그래픽에 인터레이스 GIF에서 볼 수 있는 것과 동일한 점진적 구축 디스플레이를 제공합니다. 인터레이스 GIF와 마찬가지로 프로그레시브 JPEG 이미지는 표준 JPEG보다 페이지에 로드하는 데 시간이 더 오래 걸리는 경우가 많지만 사용자에게 더 빠른 미리 보기를 제공합니다.</p><p>JPEG 압축은 이산 코사인 변환이라는 정교한 수학적 기술을 사용하여 슬라이딩 스케일의 그래픽 압축을 생성합니다. JPEG 형식의 이미지에 적용할 압축 정도를 선택할 수 있지만 그렇게 하면 이미지의 품질도 결정됩니다. JPEG 압축으로 사진을 많이 압축할수록 품질이 더욱 저하됩니다. JPEG는 놀라운 압축률을 달성하여 그래픽을 원본 파일 크기의 1/100까지 압축할 수 있습니다. 이는 JPEG 알고리즘이 이미지를 압축할 때 &#39;불필요한&#39; 데이터를 버리기 때문에 가능하며, 이를 &#39;손실&#39; 압축 기술이라고 합니다. 그림 8에서 JPEG 압축을 높이면 이미지의 세부 묘사가 어떻게 저하되는지 알 수 있습니다. 압축된 이미지의 체크 무늬 패턴과 어두운 &quot;노이즈&quot; 픽셀은 전형적인 JPEG 압축 아티팩트입니다. 오른쪽 이미지, 특히 유형 라벨 주변에 광범위한 압축 노이즈와 왜곡이 나타나는 것을 확인하세요.</p><figure><img id="figure8" alt="" src="'+p+'"><figcaption> 그림 8 </figcaption></figure><p>압축되지 않은 원본 이미지를 저장하세요! JPEG 압축을 사용하여 이미지를 압축하면 데이터가 손실되며 해당 이미지 파일에서 데이터를 복구할 수 없습니다. 항상 그래픽이나 사진의 압축되지 않은 원본 파일을 백업으로 저장하십시오. 디지털 카메라가 JPEG 이미지를 생성하는 경우 &quot;카메라 원본&quot; JPEG 파일을 따로 보관하고 웹용으로 파일을 편집할 때 복사본으로 작업하십시오. 이미지를 JPEG 형식으로 저장하거나 다시 저장할 때마다 이미지가 더 압축되고 이미지의 아티팩트와 노이즈가 증가합니다.</p><h2 id="_3-png" tabindex="-1">3. PNG <a class="header-anchor" href="#_3-png" aria-label="Permalink to &quot;3. PNG&quot;">​</a></h2><p>PNG(Portable Network Graphics)는 웹 페이지용으로 특별히 설계되었으며 다양한 색상 깊이, 정교한 이미지 투명도 지원, 향상된 인터레이스, 디스플레이 모니터 감마 자동 보정 등 다양한 매력적인 기능을 제공합니다. PNG 이미지에는 이미지 내용에 대한 짧은 텍스트 설명도 포함될 수 있으며, 이를 통해 인터넷 검색 엔진은 이러한 포함된 텍스트 설명을 기반으로 이미지를 검색할 수 있습니다.</p><p>PNG는 풀 컬러 이미지를 지원하며 사진 이미지에 사용할 수 있습니다. 그러나 무손실 압축을 사용하기 때문에 결과 파일은 손실 JPEG 압축보다 훨씬 큽니다. GIF와 마찬가지로 PNG는 라인 아트, 텍스트, 로고(색상 간 전환이 뚜렷하고 균일한 색상의 넓은 영역을 포함하는 이미지)에 가장 적합합니다. PNG 형식으로 저장된 이러한 유형의 이미지는 보기에 좋고 GIF로 저장할 때보다 파일 크기가 비슷하거나 더 작습니다. 그러나 PNG 형식의 광범위한 채택은 느렸습니다. 이는 부분적으로 웹 브라우저의 일관되지 않은 지원으로 인해 발생합니다. 특히 Internet Explorer는 PNG 그래픽의 모든 기능을 완벽하게 지원하지 않습니다. 결과적으로 PNG 압축에 적합한 대부분의 이미지는 GIF 형식을 대신 사용합니다. 이는 완전하고 일관된 브라우저 지원이라는 이점이 있습니다.</p>',21),n=[r];function s(c,P,l,h,u,I){return o(),e("div",null,n)}const d=t(G,[["render",s]]);export{F as __pageData,d as default};
