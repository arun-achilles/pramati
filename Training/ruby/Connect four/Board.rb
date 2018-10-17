class Board

	@@board = []
	@@rows = 6
	@@columns = 7

	def build_board
		@@rows.times do |row|
			@@board[row] = []

			@@columns.times do
				@@board[row] << 0
			end
		end
	end

	def print_board
		for row in @@board
			for col in row
				print "#{col}\t"
			end
			puts
		end
	end

	def coin_insert(column, symbol)
		if @@board[5][column]==0
			@@board[5][column] = symbol
			return true
		else
			row_value = self.position_chooser(column, @@rows-1)
			if row_value == -1
				puts "Enter proper column value"
				return false
			else
				@@board[row_value][column] = symbol
				return true 
			end
		end
	end

	def position_chooser(column, row)
		while @@board[row][column]!=0
			row = row-1
		end
		return row
	end

end

