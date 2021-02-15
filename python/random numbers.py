import random

all = ['one', 'two', 'three', 'four']
print(len(all))

print(random.randint(0, 10))
print(random.randint(0, len(all)))
print(all[random.randint(0, len(all)-1)])

print(random.randrange(1, 5))
print(random.random()*10)
print(random.sample(all, 2))
print(random.sample(all, 1))

print(random.shuffle(all))
print(all)

print(random._ceil(2.4))
print(random._floor(2.4))
