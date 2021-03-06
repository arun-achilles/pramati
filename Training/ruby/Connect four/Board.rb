class Board

	@@board = []
	@@rows = 6
	@@columns = 7

	def build_board
		@@rows.times do |row|
			@@board[row] = []

			@@columns.times do
				@@board[row] << '.'
			end
		end
	end

	def print_board
		puts "----------\nWelcome to Connect 4\n----------"

		@@board.each do |row| 
			row.each do |col|
		 		print "#{col} "
		 	end
		 	puts
		end
	end

	def coin_insert(column, symbol)
		row_value = position_chooser(column, @@rows-1)
		puts row_value
		if row_value == -1
			puts "--------The Column is full.----------"
			result_hash = { "inserted" => false }
		else
			@@board[row_value][column] = symbol
			result_hash = { "inserted" => true, "row" => row_value, "column" => column }
		end
		result_hash
	end

	#checkers
	def position_chooser(column, row)
		while @@board[row][column]!='.' && row>-1
			row = row-1
		end
		row
	end

	def win_checker(row, column, symbol)
		return true	if connect4_validation(row, column,[[+1,-1],[-1,+1]], symbol) || connect4_validation(row, column,[[-1,-1],[+1,+1]], symbol) ||  connect4_validation(row, column,[[-1,0],[+1,0]], symbol) ||  connect4_validation(row, column,[[0,-1],[0,+1]], symbol) 			#if positive_diagonal(row,column,symbol) || negative_diagonal(row,column,symbol)
		return false
	end

	def connect4_validation(row, column, direction, symbol)
		counter = 0
		2.times do
			adder = direction.shift
			row_direction = row+adder[0]
			col_direction = column+adder[1]
			while limit?(row_direction, col_direction)       #(0..5).include?(i) && (0..6).include?(j) #i<@@rows && j<@@columns && i>=0 && j>=0
				if @@board[row_direction][col_direction] == symbol
					counter+=1 
					return true if counter == 3
				else
					break
				end
				row_direction = row_direction+adder[0]
				col_direction = col_direction+adder[1]
			end
		end
		return false
	end

	def limit?(i, j)
		(0..5).include?(i) && (0..6).include?(j)
	end

end

