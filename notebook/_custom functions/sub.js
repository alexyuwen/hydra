function sub(x, y, amount=1) {
  return x.invert().add(y, amount).invert()
}

sub(osc(60, 0, 0), shape(4, 0.2, 0)).out()