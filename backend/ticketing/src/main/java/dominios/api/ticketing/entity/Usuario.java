package dominios.api.ticketing.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Ticketing")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Usuario {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;
    //@DBRef
    //private List<Ticket> tickets;
    private String tipo;
}
