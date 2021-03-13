# https://pyformat.info/

## Padding floated numbers

floated = 6.3495345345

### At least 5 chars width and 2 after decimal point
printed = '{:05.2f}'.format(floated + 0.01)

print(floated)
print(printed)