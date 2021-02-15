all = ['CSS', 'CSS3', 'Python', 'HTML', 'Django']
query = 'cs'


def subs_filter(query, thing):
	# output_list = []
	# for entry in thing:
	# 	if query in entry.lower():
	# 		output_list.append(entry)
	# return output_list

	result = list(filter(lambda k: query in k.lower(), thing))
	return result


print(subs_filter(query, all))


def subs_find(query, thing):
	output_list = []
	for entry in thing:
		if entry.lower().find(query) > -1:
			output_list.append(entry)
	return output_list


print(subs_find(query, all))
