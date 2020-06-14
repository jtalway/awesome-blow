function findSeverity() {
  // Find the base Critical Severity based on weapon damage
  var effectNum = parseFloat(document.querySelector('input[name="weaponDmg"]:checked').value);
  // Find the number of possible Severity Increasers to loop through
  var input = document.getElementsByName("severity");
  // initialize variable to track number of Severity Increases
  var total = 0;
  // loop through possible Severity Increasers
  for (var i = 0; i < input.length; i++) {
    // if Severity Increaser is possessed
    if (input[i].checked) {
      // Add to the number of Severity Increases
      total += parseFloat(input[i].value);
    }
  }
  // Final Critical Severity Rating
  critSeverity = effectNum + total;
}
switch (critSeverity) {
  case 1:
    // [@Effect1]
    break;
  case 2:
    // [@Effect2][@Effect1]
    break;
  case 3:
    // [@Effect3][@Effect1]
    break;
  case 4:
    // [@Effect4][@Effect1]
    break;
  case 5:
    // [@Effect4][@Effect2][@Effect1]
    break;
  case 6:
    // [@Effect4][@Effect3][@Effect1]
    break;
  case 7:
    // [@Effect4][@Effect3][@Effect2][@Effect1][@Effect1]
    break;
  default:
    // code block
}

// Table:Effect1
// 50:+{1d4} damage
// 50:x2 Weapon damage
// 10:Minor Bleeding (lose 1hp/round)
// 2:1 Strength damage
// 2:1 Dexterity damage
// 1:1 Constitution damage
// 1:1 Intelligence damage
// 1:1 Wisdom damage
// 1:1 Charisma damage
// 1:Instant Kill (Save vs. Death at {3d4-1d6}), if save take {1d6} damage
// 10:-{1d4} Attack penalty, [@duration]
// 10:-{1d4} AC penalty, [@duration]
// 5:1/2 Move, [@duration2]
// 1:Blinded, [@duration2]
// 1:Deafened, [@duration2]
// 10:Disarmed {(1d3-1)*5} feet away in [@direction] direction
// 5:Fatigued
// 10:Flat-footed
// 10:Knocked Back 5' (you can follow if you have sufficient movement remaining)
// 5:Knocked Down (prone)
// 2:Knocked Out (Save vs. Paralysis at {3d4-1d6})
// 1:Paralyzed (Save vs. Paralysis at {3d4-1d6})
// 2:Stunned, [@duration]
// EndTable:
//
// Table:Effect2
// 50:+{1d6} damage
// 50:x2 Weapon damage
// 10:Bleeding (lose {1d2}hp/round)
// 2:1 Strength damage
// 2:1 Dexterity damage
// 1:1 Constitution damage
// 1:1 Intelligence damage
// 1:1 Wisdom damage
// 1:1 Charisma damage
// 5: Sunder Weapon (Save vs. Paralysis at {2d4-1d8})
// 5: Sunder Shield (Save vs. Paralysis at {2d4-1d8})
// 5:<i>melee</i>: Enemies in front arc take {1d4} damage<br><i>ranged</i>: Enemy behind target takes {1d4} damage
// 2:<i>melee</i>: Enemies you threaten take {1d4} damage<br><i>ranged</i>: {1d3} enemies behind target take {1d4} damage
// 1:Instant Kill (Save vs. Death at {2d4-1d8}), if save take {2d6} damage
// 10:-{1d6} Attack penalty, [@duration]
// 10:-{1d6} AC penalty, [@duration]
// 5:1/2 Move, [@duration2]
// 5:1/3 Move, [@duration2]
// 1:Blinded, [@duration2]
// 1:Deafened, [@duration2]
// 10:Disarmed {(1d3-1)*5} feet away in [@direction] direction
// 5:Fatigued
// 10:Flat-footed
// 10:Knocked Back 5' (you can follow if you have sufficient movement remaining)
// 2:<i>melee</i>: Enemies in front arc knocked back 5'  (you can follow if you have sufficient movement remaining)<br><i>ranged</i>: Target + {1d3} enemies behind target are knocked back 5'
// 10:Knocked Down (prone)
// 2:<i>melee</i>: Enemies in front arc knocked down (prone)<br><i>ranged</i>: Target + {1d3} enemies behind target are knocked down (prone)
// 2:Knocked Out (Save vs. Paralysis at {2d4-1d8})
// 1:Paralyzed (Save vs. Paralysis at {2d4-1d8})
// 2:Stunned, [@duration]
// EndTable:
//
// Table:Effect3
// 50:+{1d8} damage
// 50:x2 Weapon damage
// 10:Bleeding (lose {1d2}hp/round)
// 5:Severe Bleeding (lose {1d2+1} hp/round)
// 2:{1d4} Strength damage
// 2:{1d4} Dexterity damage
// 1:{1d4} Constitution damage
// 1:{1d4} Intelligence damage
// 1:{1d4} Wisdom damage
// 1:{1d4} Charisma damage
// 10: Sunder Weapon (Save vs. Paralysis at {1d4-1d10})
// 10: Sunder Shield (Save vs. Paralysis at {1d4-1d10})
// 5:<i>melee</i>: Enemies in front arc take {1d6} damage<br><i>ranged</i>: Enemy behind target takes {1d6} damage
// 2:<i>melee</i>: Enemies you threaten take {1d6} damage<br><i>ranged</i>: {1d3} enemies behind target take {1d6} damage
// 1:Instant Kill (Save vs. Death at {1d4-1d10}), if save take {3d6} damage
// 10:-{1d6} Attack penalty, [@duration]
// 10:-{1d6} AC penalty, [@duration]
// 5:1/2 Move, [@duration2]
// 5:1/3 Move, [@duration2]
// 1:Blinded, [@duration2]
// 1:Deafened, [@duration2]
// 10:Disarmed {(1d3-1)*5} feet away in [@direction] direction
// 5:Fatigued
// 10:Flat-footed
// 10:Knocked Back 5' (you can follow if you have sufficient movement remaining)
// 5:<i>melee</i>: Enemies in front arc knocked back 5' (you can follow if you have sufficient movement remaining)<br><i>ranged</i>: Target + {1d3} enemies behind target are knocked back 5'
// 10:Knocked Down (prone)
// 5:<i>melee</i>: Enemies in front arc knocked down (prone)<br><i>ranged</i>: Target + {1d3} enemies behind target are knocked down (prone)
// 5:Knocked Out (Save vs. Paralysis at {1d4-1d10})
// 1:Paralyzed (Save vs. Paralysis at {1d4-1d10})
// 5:Stunned, [@duration]
// EndTable:
//
// Table:Effect4
// 50:+{1d10} damage
// 50:x2 Weapon damage
// 10:Severe Bleeding (lose {1d3+1} hp/round)
// 2:{1d6} Strength damage
// 2:{1d6} Dexterity damage
// 1:{1d6} Constitution damage
// 1:{1d6} Intelligence damage
// 1:{1d6} Wisdom damage
// 1:{1d6} Charisma damage
// 10: Sunder Weapon (Save vs. Paralysis at -{1d10})
// 10: Sunder Shield (Save vs. Paralysis at -{1d10})
// 5:<i>melee</i>: Enemies in front arc take {1d8} damage<br><i>ranged</i>: Enemy behind target takes {1d8} damage
// 5:<i>melee</i>: Enemies you threaten take {1d8} damage<br><i>ranged</i>: {1d4} enemies behind target take {1d8} damage
// 1:Instant Kill (Save vs. Death at -{1d10}), if save take {4d6} damage
// 5:<i>melee</i>: Enemies in front arc knocked back 5' (you can follow if you have sufficient movement remaining)<br><i>ranged</i>: Target + {1d4} enemies behind target are knocked back 5'
// 5:<i>melee</i>: Enemies in front arc knocked down (prone)<br><i>ranged</i>: Target + {1d4} enemies behind target are knocked down (prone)
// 10:Knocked Out (Save vs. Paralysis at -{1d10})
// 1:Paralyzed (Save vs. Paralysis at -{1d10})
// EndTable:
//
// Table:Direction
// NW
// N
// NE
// E
// SE
// S
// SW
// W
// EndTable:
//
// Table:Duration
// 10:1 round
// 5:{1d4} round(s)
// {1d10} minute(s)
// EndTable:
//
// Table:Duration2
// {1d10} minute(s)
// {1d6} hour(s)
// {1d4} day(s)
// permanent
// EndTable:
//
// Table:RightLeft
// right
// left
// EndTable:
