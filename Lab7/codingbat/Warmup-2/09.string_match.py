def string_match(a, b):
    return sum([a[i:i+2] == b[i:i+2] for i in range(min(len(a), len(b)) - 1)])