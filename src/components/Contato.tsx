export default function Contato() {
    return (
        <section className="bg-[#e6f7ff] py-12 px-4">
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#d70005] mb-6 text-center">Fale com a gente</h2>
            
            <form
              action="https://formsubmit.co/motosnet.adm@gmail.com" // Substitua pelo seu email
              method="POST"
              className="space-y-4"
              target="_blank"
            >
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-[#d70005] font-medium mb-1">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d70005]"
                />
              </div>
    
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[#d70005] font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d70005]"
                />
              </div>
    
              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-[#d70005] font-medium mb-1">Mensagem</label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d70005]"
                ></textarea>
              </div>
    
              {/* Botão */}
              <button
                type="submit"
                className="w-full bg-[#d70005] text-white py-3 rounded-md hover:bg-[#d70005] transition"
              >
                Enviar mensagem
              </button>
    
              {/* Anti-spam do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </section>
      );
}
