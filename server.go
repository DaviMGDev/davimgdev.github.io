package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)

	port := "8082"
	fmt.Printf("Serving on http://localhost:%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
