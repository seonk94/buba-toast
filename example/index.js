import Toast from '../lib/toast'

document.addEventListener('DOMContentLoaded', () => {
  const toast = new Toast()

  const success = document.getElementById('success')
  const info = document.getElementById('info')
  const warn = document.getElementById('warn')
  const danger = document.getElementById('danger');

  [success, info, warn, danger].forEach(button => button.addEventListener('click', () => {
    toast[button.id](button.id)
  }))
})
