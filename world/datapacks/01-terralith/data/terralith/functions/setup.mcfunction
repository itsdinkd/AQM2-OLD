scoreboard objectives add tr.first dummy
execute unless score %USED tr.first matches 2.. run scoreboard objectives add terralith.reset trigger
execute unless score %USED tr.first matches 2.. run schedule function terralith:toast 20t
scoreboard players set %USED tr.first 2
schedule function terralith:utility/disable_resetting 2400t