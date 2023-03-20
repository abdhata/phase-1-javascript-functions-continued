function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

  function wrapAdjective(adjective = "special") {
    const innerFunction = function (encouragement= "You are a very ${adjective} programmer!") {
      return `${encouragement}, dedicated}`;
    };
    return innerFunction;
  }
  
  