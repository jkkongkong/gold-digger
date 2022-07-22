export function openUrl(url) {
  if (url) {
    window.open(url)
  }
}
export function copyUrl(url, vm) {
  if (url) {
    const input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')
    input.value = url
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    vm.$message.success('复制到粘贴板')
  }
}
