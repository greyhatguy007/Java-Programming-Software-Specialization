def get_pts(filename):
    file = open(filename)
    pts = []
    for i in file.readlines():
        pts.append(i.strip().split(","))
    file.close()
    for i in range(len(pts)):
        for j in range(2):
            pts[i][j] = int(pts[i][j])
    return pts


def calculate_dist(p1, p2):
    dist = ((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2) ** 0.5
    return dist


def calc_perimeter(file):
    pts = get_pts(filename=file)
    perimeter = 0.
    for i in range(0, len(pts) - 1):
        perimeter += calculate_dist(pts[i], pts[i + 1])
    perimeter += calculate_dist(pts[-1], pts[0])
    return perimeter


def calc_avg_side(file):
    pts = get_pts(filename=file)
    perimeter = 0.
    for i in range(0, len(pts) - 1):
        perimeter += calculate_dist(pts[i], pts[i + 1])
    perimeter += calculate_dist(pts[-1], pts[0])
    avg_side = perimeter / len(pts)
    return avg_side


def largest_side(file):
    pts = get_pts(filename=file)
    max_side = 0.
    for i in range(0, len(pts) - 1):
        side = calculate_dist(pts[i], pts[i + 1])
        if side > max_side:
            max_side = side
    side = calculate_dist(pts[-1], pts[0])
    if side > max_side:
        max_side = side
    return max_side


ans = 0
for i in range(1, 7):
    ans = calc_perimeter("datatest" + str(i) + ".txt")
    print(f"PERIM dataset{i} : {ans}")

for i in range(1, 5):
    ans = calc_perimeter("example" + str(i) + ".txt")
    print(f"PERIM example{i} : {ans}")

for i in range(1, 7):
    ans = calc_avg_side("datatest" + str(i) + ".txt")
    print(f"AVG dataset{i} : {ans}")

for i in range(1, 5):
    ans = calc_avg_side("example" + str(i) + ".txt")
    print(f"AVG example{i} : {ans}")

for i in range(1, 7):
    ans = largest_side("datatest" + str(i) + ".txt")
    print(f"LONGEST dataset{i} : {ans}")

for i in range(1, 5):
    ans = largest_side("example" + str(i) + ".txt")
    print(f"LONGEST example{i} : {ans}")