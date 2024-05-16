"use client"

import { GiFoundryBucket, GiWoodenCrate } from "react-icons/gi"
import { MdPallet } from "react-icons/md"
import { ServiceCard } from "./service-card"

export function ServiceCards() {
  return (
    <section className="bg-neutral-50 h-[600px] px-4">
      <div className="container mx-auto gap-x-4 gap-y-8 flex flex-col lg:flex-row lg:items-center justify-center h-full">
        <ServiceCard
          title="Painéis de madeira"
          content="Transporte seguro e pontual de painéis de madeira, preservando a integridade do material."
          icon={GiWoodenCrate}
        />
        <ServiceCard
          title="Alimentos paletizados"
          content="Entrega confiável e higiênica de alimentos paletizados, seguindo rigorosos padrões de segurança alimentar."
          icon={MdPallet}
        />
        <ServiceCard
          title="Siderúrgica"
          content="Soluções robustas para o transporte de produtos siderúrgicos, com foco em eficiência e segurança."
          icon={GiFoundryBucket}
        />
      </div>
    </section>
  )
}
