def last2(str):
    return sum([str[i:i+2] == str[-2:] for i in range(len(str)-2)])