run:
	@if [ $(lang) = "js" ]; then\
		node ./javascript/$(name)/challenge-$(name).js;\
	fi
	@if [ $(lang) = "rust" ]; then\
		rustc ./rust/$(name)/main.rs;\
		./main;\
		rm ./main;\
	fi
