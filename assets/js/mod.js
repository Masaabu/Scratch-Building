const sbModList = [
    {
      title: 'SB MOD v1.0',
      description: 'by Masaabu-YT',
      id: 940232456,
      tag: '"textFrame orange">公式<'
    }
]

const sbApiList = [
    {
      title: 'SBAPI',
      description: 'ビル経営ゲームの拡張性を上げるツール<br>by dmmo-com-jp',
      id: 933515639,
      tag: '"textFrame blue">前提MOD<'
    },
    {
      title: 'cmdplus',
      description: 'SBAPIのpostに依存した、コマンド強化modです。<br>by dmmo-com-jp',
      id: 939787547
    },
    {
      title: '隕石経営ゲーム',
      description: '隕石！！<br>by banana_877_',
      id: 933713134
    }
];

const sbAddonsList = [
    {
      title: 'SB Addons',
      description: 'by -Masaabu-,Masaabu-YT',
      id: 790969288,
      tag: '"textFrame orange">公式<'
    },
    {
      title: 'SB Addons+',
      description: 'by dmmo-com-jp',
      id: 791408146
    },
    {
      title: '隕石アドオン',
      description: 'by dmmo-com-jp',
      id: 792121597
    },
    {
      title: 'Re:BN addon',
      description: 'by banana_877_',
      id: 817892400
    },
    {
      title: 'SB Addons Remix',
      description: 'by yoshikunTA',
      id: 795165690
    }
];

const sbAddonsApiList = [
    {
      title: 'SBAPI',
      description: 'お金の管理や幸福度の管理を簡単に行えます。<br>by dmmo-com-jp',
      id: 926411096,
      tag: '"textFrame blue">前提MOD<'
    },
    {
      title: '天候復活アドオン',
      description: '天候を6.0に復活させます。<br>by dmmo-com-jp',
      id: 933340996
    }
];

const section = [["sbModList",sbModList],["sbApiList",sbApiList],["sbAddonsList",sbAddonsList],["sbAddonsApiList",sbAddonsApiList]]

function generateList() {
    section.forEach(element => {
        const ListContainer = document.getElementById(element[0]);

        element[1].forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
              <img src="https://cdn2.scratch.mit.edu/get_image/project/${project.id}_480x360.png">
              <div class="project-desc" style="margin:5px;">
                <h2 style="padding-top:0;">${project.title}</h2>
                ${project.tag?`<div class=${project.tag}/div>`:''}
              </div>
              <p>${project.description}</p>
            `;
            projectElement.addEventListener('click', () => {
                openProject(project.id);
            });
            ListContainer.appendChild(projectElement);
        });
    });
}

generateList()