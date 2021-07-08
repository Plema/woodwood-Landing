var showSpoiler = function () {
  document.getElementById('name1').setAttribute('checked', 'checked')
  document.getElementById('spoiler').style.display = 'block'
}

document.getElementById('link').addEventListener('click', showSpoiler, false)
