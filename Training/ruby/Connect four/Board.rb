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
		for row in @@board
			for col in row
				print "#{col}  "
			end
			puts "\n"
		end
	end

	def coin_insert(column, symbol)
		result_hash = {}
		row_value = self.position_chooser(column, @@rows-1)
		if row_value == -1
			puts "--------The Column is full.----------"
			result_hash["inserted"] = false
		else
			@@board[row_value][column] = symbol
			result_hash["inserted"] = true
			result_hash["row"] = row_value
			result_hash["column"] = column
		end
		return result_hash
	end

	#checkers
	def position_chooser(column, row)
		while @@board[row][column]!='.' && row>-1
			row = row-1
		end
		if row <0
			return -1
		else
			return row
		end
	end

	def vertical_checker(column, symbol)
		array = []
		@@rows.times do |row|
			array[row] = @@board[row][column]
		end
		return connect4_checker(array, symbol)
	end

	def horizontal_checker(row, symbol)
		array = []
		@@columns.times do |col|
			array[col] = @@board[row][col]
		end
		return connect4_checker(array, symbol)
	end


	def connect4_checker(array, symbol)
		counter = 0
		array.size.times do |i|
			if array[i] == symbol
				counter+=1
				return true if counter == 4
			else
				counter = 0
			end
		end
		return false
	end

	def diagonal_checker(row, column, symbol)
		return true	if diagonal_match(row, column,[[+1,-1],[-1,+1]], symbol) || diagonal_match(row, column,[[-1,-1],[+1,+1]], symbol)			#if positive_diagonal(row,column,symbol) || negative_diagonal(row,column,symbol)
		return false
	end

	def diagonal_match(row, column, direction, symbol)
		counter = 0
		2.times do
			adder = direction.shift
			i = row+adder[0]
			j = column+adder[1]
			while i<@@rows && j<@@columns && i>=0 && j>=0
				counter+=1 if @@board[i][j] == symbol
				return true if counter == 3
				i = i+adder[0]
				j = j+adder[1]
			end
		end
		return false
	end
=begin
	def positive_diagonal(row, column, symbol)
		counter = 0
		i = row
		j = column
		while i>=0 && j<@@columns
			if @@board[i][j] == symbol
				counter+=1
				return true if counter == 4
				i-=1
				j+=1
			else
				break
			end
		end
		row+=1
		column-=1
		while row<@@rows && column>=0
			if @@board[row][column] == symbol
				counter+=1
				return true if counter == 4
				row+=1
				column-=1
			else
				break
			end
		end
		return false
	end

	def negative_diagonal(row, column, symbol)
		counter = 0
		i = row
		j = column
		while i<@@rows && j<@@columns
			if @@board[i][j] == symbol
				counter+=1
				return true if counter == 4
				i+=1
				j+=1
			else
				break
			end
		end
		row-=1
		column-=1
		while row>=0 && column>=0
			if @@board[row][column] == symbol
				counter+=1
				return true if counter == 4
				row-=1
				column-=1
			else
				break
			end
		end
		return false
	end
=end

end



