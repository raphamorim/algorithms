run:
	@if [ $(lang) = "js" ]; then\
		node ./javascript/$(n)/challenge-$(n).js;\
	fi
	@if [ $(lang) = "rust" ]; then\
		rustc ./rust/$(n)/main.rs;\
		./main;\
		rm ./main;\
	fi
