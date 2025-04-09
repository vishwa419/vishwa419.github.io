package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
)

func main() {
	// Define port (default 8080)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Set up template handling
	tmpl := template.Must(template.ParseGlob("*.html"))
	template.Must(tmpl.ParseGlob("*.html"))

	// Static file server
	fs := http.FileServer(http.Dir(""))
	http.Handle("/static/", http.StripPrefix("", fs))

	// Main route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}

		err := tmpl.ExecuteTemplate(w, "index.html", nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	// HTMX routes for partial content
	http.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "about.html", nil)
	})

	http.HandleFunc("/skills", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "skills.html", nil)
	})

	http.HandleFunc("/projects", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/javascript")
		tmpl.ExecuteTemplate(w, "projects.html", nil)
	})

	http.HandleFunc("/experience", func(w http.ResponseWriter, r *http.Request) {
		tmpl.ExecuteTemplate(w, "experience.html", nil)
	})

	// Contact form handling (simplified for demo)
	http.HandleFunc("/contact", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {
			name := r.FormValue("name")
			email := r.FormValue("email")
			_ = r.FormValue("message")

			// In a real app, you would save this or send an email
			// For demo, just respond with a success message
			w.Header().Set("Content-Type", "text/javascript")
			fmt.Fprintf(w, "<div class='alert alert-success'>Thank you %s! Your message has been received. We'll contact you at %s shortly.</div>", name, email)
			return
		}

		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	})

	// Start server
	fmt.Printf("Server starting on port %s...\n", port)
	fmt.Printf("Open http://localhost:%s in your browser\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
