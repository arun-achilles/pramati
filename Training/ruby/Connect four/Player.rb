require './Board'
class Player 
	def initialize
		@@game = Board.new
	end
		
	def buildGame
		@@game.build_board
		@@game.print_board
		@@counter = 0
		@@win = false
		@@draw = false
	end
	
	def playerToggler
		toggler = true
		while !@@win && !@@draw
			if toggler
				if activePlayer(1, '+')
					toggler = !toggler
				end
			else
				if activePlayer(2, 'x')
					toggler = !toggler
				end
			end
		end
	end

	def activePlayer(player_id, player_symbol)
		if @@counter == 42
			puts "````Match Draw````"
			@@draw = true
			return false
		end
		input = nil
		until [1,2,3,4,5,6,7].include?(input) do
			puts "------------Player #{player_id} : Enter the Column value-------------"
			input = gets.to_i
		end
		insert_outcome = @@game.coin_insert(input-1, player_symbol)
		if insert_outcome["inserted"]
			@@counter+=1
			system "clear"
			@@game.print_board
			if @@game.win_checker(insert_outcome["row"], insert_outcome["column"], player_symbol)
				puts "!!!!!!!player #{player_id} won the game.!!!!!!!!"
				@@win = true
			end
			return true
		else
			return false
		end
	end
	
end

play = Player.new
play.buildGame
play.playerToggler
