def solution(box, n):
    width = int(box[0] / n)
    height = int(box[1] / n)
    depth = int(box[2] / n)
    answer = width * height * depth
    return answer