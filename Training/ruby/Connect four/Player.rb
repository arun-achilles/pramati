require './Board'
class Player
	@@game = Board.new
	@@game.build_board
	puts ".....Welcome to Connect 4......"
	@@game.print_board

	@@win = false

	def playerToggler
		toggler = true
		while !@@win
			if toggler
				puts "Player 1 : Enter the Column value"
				input = gets.to_i
				if @@game.coin_insert(input-1, '*')
					toggler = !toggler
					@@game.print_board
				end

			else
				puts "Player 2 : Enter the Column Value"
				input = gets.to_i
				if @@game.coin_insert(input-1, 'x')
					toggler = !toggler
					@@game.print_board
				end
			end
		end
	end

end



play = Player.new
play.playerToggler
