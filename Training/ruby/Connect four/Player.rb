require './Board'
class Player 
	@@game = Board.new
	@@win = false

	def buildGame
		@@game.build_board
		puts ".....----------......\nWelcome to Connect 4\n......----------......"
		@@game.print_board
	end
	
	def playerToggler
		toggler = true
		while !@@win
			if toggler
				if activePlayer(1, '*')
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
		puts "------------Player #{player_id} : Enter the Column value-------------"
		input = gets.to_i
		insert_outcome = @@game.coin_insert(input-1, player_symbol)
		if insert_outcome["inserted"]
			@@game.print_board
			if win_checker(insert_outcome["row"], insert_outcome["column"], player_symbol)
				puts "!!!!!!!player #{player_id} won the game.!!!!!!!!"
				@@win = true
			end
			return true
		else
			return false
		end
	end

	def win_checker(row, column, symbol)
		if  @@game.horizontal_checker(row, symbol) || @@game.vertical_checker(column, symbol) || @@game.diagonal_checker(row, column, symbol)
			return true
		else
			return false
		end
	end
	
end

play = Player.new
play.buildGame
play.playerToggler
