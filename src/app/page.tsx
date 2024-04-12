import { ExampleContent } from "@/components/example-content"
import { TextParallaxContent } from "@/components/text-parallax-content"

export default function Home() {
  return (
    <main>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Built for all of us."
        subHeading="Collaborate"
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Never compromise."
        subHeading="Quality"
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Dress for the best."
        subHeading="Modern"
      >
        <ExampleContent />
      </TextParallaxContent>
    </main>
  )
}
