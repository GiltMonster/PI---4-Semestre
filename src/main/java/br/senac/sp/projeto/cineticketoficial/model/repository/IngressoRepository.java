package br.senac.sp.projeto.cineticketoficial.model.repository;

import br.senac.sp.projeto.cineticketoficial.model.entity.Ingresso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngressoRepository extends JpaRepository<Ingresso, Integer> {
}
