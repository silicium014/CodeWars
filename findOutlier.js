function findOutlier(integers){
    let bLier = Math.abs((integers[0]%2==0 && integers[1]%2==0)||(integers[1]%2==0 && integers[2]%2==0)||(integers[0]%2==0 && integers[2]%2==0));
    
  for(let i = 0;i < integers.length; i++) {
      if (Math.abs(integers[i]%2) == bLier)
        return integers[i];
  }
}
