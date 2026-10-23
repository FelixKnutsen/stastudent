import urllib.request, re

req = urllib.request.Request('https://stastudent.no/reliant/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

hrefs = re.findall(r'href=[\'"]([^\'"]+)[\'"]', html)
for h in sorted(set(hrefs)):
    if 'reliant' in h:
        print(h)
