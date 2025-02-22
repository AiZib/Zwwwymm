// 模拟项目数据
const projects = [
  {
    imgSrc: 'images/pic/1.jpg',
  },
  {
    imgSrc: 'images/pic/2.jpg',
  },
  {
    imgSrc: 'images/pic/3.jpg',
  },
  {
    imgSrc: 'images/pic/4.jpg',
  },
  {
    imgSrc: 'images/pic/5.jpg',
  },
  {
    imgSrc: 'images/pic/6.jpg',
  },
  {
    imgSrc: 'images/pic/7.jpg',
  },
  {
    imgSrc: 'images/pic/8.jpg',
  },
  {
    imgSrc: 'images/pic/9.jpg',
  },
  //一直添加到34
  {
    imgSrc: 'images/pic/10.jpg',
  },
  {
    imgSrc: 'images/pic/11.jpg',
  },
  {
    imgSrc: 'images/pic/12.jpg',
  },
  {
    imgSrc: 'images/pic/13.jpg',
  },
  {
    imgSrc: 'images/pic/14.jpg',
  },
  {
    imgSrc: 'images/pic/15.jpg',
  },
  {
    imgSrc: 'images/pic/16.jpg',
  },
  {
    imgSrc: 'images/pic/17.jpg',
  },
  {
    imgSrc: 'images/pic/18.jpg',
  },
  {
    imgSrc: 'images/pic/19.jpg',
  },
  {
    imgSrc: 'images/pic/20.jpg',
  },
  {
    imgSrc: 'images/pic/21.jpg',
  },
  {
    imgSrc: 'images/pic/22.jpg',
  },
  {
    imgSrc: 'images/pic/23.jpg',
  },
  {
    imgSrc: 'images/pic/24.jpg',
  },
  {
    imgSrc: 'images/pic/25.jpg',
  },
  {
    imgSrc: 'images/pic/26.jpg',
  },
  {
    imgSrc: 'images/pic/27.jpg',
  },
  {
    imgSrc: 'images/pic/28.jpg',
  },
  {
    imgSrc: 'images/pic/29.jpg',
  },
  {
    imgSrc: 'images/pic/30.jpg',
  },
  {
    imgSrc: 'images/pic/31.jpg',
  },
]

const portfolioContent = document.querySelector('.portfolio-content')

projects.forEach((project) => {
  const item = document.createElement('div')
  item.classList.add('item')

  const img = document.createElement('img')
  img.classList.add('img-fluid')
  img.src = project.imgSrc
  img.alt = ''
  item.appendChild(img)

  const overlay = document.createElement('div')
  overlay.classList.add('overlay')

  const iconLink = document.createElement('a')
  iconLink.classList.add('icon-img')
  iconLink.href = project.imgSrc
  const icon = document.createElement('i')
  icon.classList.add('fa', 'fa-search-plus')
  iconLink.appendChild(icon)
  overlay.appendChild(iconLink)
  item.appendChild(overlay)
  portfolioContent.appendChild(item)
})
