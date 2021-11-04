export function getQueryString(url: string, name: string): string {
  if (!url) return null;
  const index = url.indexOf('?');

  if (index !== -1) {
    url = url.substr(index + 1);
  }
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = url.match(reg);

  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}
