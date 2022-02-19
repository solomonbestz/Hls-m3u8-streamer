import textwrap

def wrap(string, max_width):
    return textwrap.fill(string, max_width)


if __name__=="__main__":

    s = "ABCDEFGHIJKLIMNOQRSTUVWXYZ"
    width = 4

    print(wrap(s, width))