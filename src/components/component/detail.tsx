
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"
import  Skills  from "./skills";
import  Projects  from "./projects";
import Education from "./education";
export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-3">
        {/* Tabs triger button*/}

        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="Skills">Skills</TabsTrigger>
        <TabsTrigger value="Project">Project</TabsTrigger>
      </TabsList>
       {/* Tabs content here*/}
       {/* Education*/}
      <TabsContent value="education">
      <Education />
      </TabsContent>
       {/* Skills */}
      <TabsContent value="Skills">
      <Skills />
      </TabsContent>
       {/* projects */}
      <TabsContent value="Project">
        <Projects />
      </TabsContent>
    </Tabs>
  );
}
