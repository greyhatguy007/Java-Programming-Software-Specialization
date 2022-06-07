def dist(p1,p2):
    return ((p1[0]-p2[0])**2 +  (p1[1]-p2[1])**2)**0.5

pts = (-3, 9),(-8, 7),(-12, 4),(-6, -2),(-4, -6),(2, -8),(6, -5),(10, -3),(8, 5),(4, 8)
ans = 0
max = 0
for i in range(0,8):
    ans = dist(pts[i],pts[i+1])
    if ans > max:
        max = ans
ans += dist(pts[0],pts[9])

print(max)