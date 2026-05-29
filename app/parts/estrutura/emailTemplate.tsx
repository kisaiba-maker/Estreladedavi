export function EmailTemplate(body: ContatoTypes) {
    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            backgroundColor: "#f4f4f5"
        }}>
            
            <div style={{
                maxWidth: "500px",
                margin: "0 auto",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px"
            }}>
                
                <h2 style={{ marginBottom: "20px" }}>
                    📩 Contato Site - Estrela de Davi
                </h2>

                <p><strong>Nome:</strong> {body.nome}</p>
                <p><strong>E-mail:</strong> {body.email}</p>
                <p><strong>Telefone:</strong> {body.telefone}</p>

                <hr style={{ margin: "20px 0" }} />

                <p style={{ fontSize: "12px", color: "#666" }}>
                    Mensagem enviada pelo formulário do site.
                </p>

            </div>
        </div>
    )
}