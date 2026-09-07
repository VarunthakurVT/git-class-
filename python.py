import re

print(re.sub(r'(a)(b)?', r'<\2>', 'ab ac'))