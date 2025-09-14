s0 = solid()
s1 = solid()
s2 = solid()
s3 = solid()



shape(4, 0.001).out(o0)

noise(0.5, 0.2).color(1,1).out(o1)

shape(4, 0.001).modulateScale(src(o1), 200).out(o2)




render()