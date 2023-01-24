const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addBtn = document.getElementById('addBtn')
const removeBtn = document.getElementById('removeBtn')
const removeBtn1 = document.getElementById('removeBtn1')
const list = document.getElementById('list')
const webpage = document.getElementById('webpage')
const disableBtn1 = document.getElementById('disableBtn1')

const listContent = []

function render() {
  let htmlStr = ''
  listContent.forEach(function(item) {
    htmlStr = htmlStr + `
    <div class="item">
    <div>
      <p>內容: ${item.content}</p>
      <p>日期: ${item.date} ${item.time}</p>
    </div>
  </div>`
  })
  list.innerHTML = htmlStr
}



disableBtn1.addEventListener('click', function() {
    let timerInterval
  Swal.fire({
    title: '我們正在努力開發中!',
    html: '日以繼夜...夜以繼日',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('自動關閉alert 開發')
    }
  })

})

webpage.addEventListener('click', function(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
    title: '您已經在此頁面了!'
  })
})

addBtn.addEventListener('click', function() {
  listContent.unshift({
    content: content.value,
    date: date.value,
    time: time.value
  })

  render()
})

removeBtn1.addEventListener('click' ,function() {
  listContent.pop()
  render()


})


removeBtn.addEventListener('click', function() {
  listContent.shift()

  render()

})
