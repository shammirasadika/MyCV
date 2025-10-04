import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MapPin, Calendar, Building } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-32 h-32">
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  SP
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Shammi Parussella
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Software Engineer & .NET Consultant
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Melbourne, Australia
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    +61 459497554
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    shammirasadika123@gmail.com
                  </div>
                </div>
                <div className="flex justify-center md:justify-start mt-4">
                  <Button asChild variant="outline">
                    <a 
                      href="https://www.linkedin.com/in/shammiparussella-301603197" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A self-motivated and hardworking individual with over four years of valuable industrial 
              experience in .NET consulting, training, and solution development. Committed to ensuring 
              complete customer satisfaction and service excellence. Possesses excellent communication 
              skills and demonstrates the ability and experience to relate to a wide range of people.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Backend & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.NET Framework</Badge>
                  <Badge variant="secondary">.NET Core</Badge>
                  <Badge variant="secondary">ASP.NET MVC</Badge>
                  <Badge variant="secondary">ASP.NET Core</Badge>
                  <Badge variant="secondary">C#</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Entity Framework</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Frontend & Web</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">React Native</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Database & Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Microsoft SQL Server</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">T-SQL</Badge>
                  <Badge variant="secondary">Microsoft Azure</Badge>
                  <Badge variant="secondary">Azure Functions</Badge>
                  <Badge variant="secondary">Azure DevOps</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Development Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Visual Studio</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">RESTful APIs</Badge>
                  <Badge variant="secondary">Unit Testing</Badge>
                  <Badge variant="secondary">TDD</Badge>
                  <Badge variant="secondary">NUnit</Badge>
                  <Badge variant="secondary">xUnit</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Experience 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technical Consultant/Software Engineer
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  May 2023 - April 2024
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3 text-gray-600 dark:text-gray-400">
                <Building className="w-4 h-4" />
                CONIFS Global (Pvt) Ltd
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-3">
                <li>Design, build, and upkeep the structure of databases, including tables, relationships, and data types</li>
                <li>Create advanced T-SQL queries and optimize queries for enhanced performance</li>
                <li>Detect and rectify performance issues in SQL queries</li>
                <li>Coordinated with internal teams to identify and develop solutions for technical needs</li>
                <li>Conducted informational sessions to train personnel in the use of software, hardware and systems</li>
              </ul>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">.NET Core</Badge>
                <Badge variant="outline" className="text-xs">Azure DB</Badge>
                <Badge variant="outline" className="text-xs">ASP.NET</Badge>
                <Badge variant="outline" className="text-xs">Azure Functions</Badge>
                <Badge variant="outline" className="text-xs">React Native</Badge>
                <Badge variant="outline" className="text-xs">MS SQL</Badge>
                <Badge variant="outline" className="text-xs">Azure DevOps</Badge>
              </div>
            </div>

            <Separator />

            {/* Experience 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Software Engineer
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  April 2022 - May 2023
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3 text-gray-600 dark:text-gray-400">
                <Building className="w-4 h-4" />
                Acentura (Pvt) Ltd
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Works with a team to improve existing software or design new applications</li>
                <li>Developing standard operating procedures and investigating and using new technologies</li>
                <li>Draft data models and visual diagrams representing the structure and relationships within the database</li>
              </ul>
            </div>

            <Separator />

            {/* Experience 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Associate Software Engineer
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  February 2021 - April 2022
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3 text-gray-600 dark:text-gray-400">
                <Building className="w-4 h-4" />
                DMS Software Engineering (Pvt) Ltd
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-3">
                <li>Developed a new software product from the ground up</li>
                <li>Works with a team to improve existing software or design new applications</li>
                <li>Create advanced T-SQL queries and troubleshoot database issues</li>
              </ul>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">.NET Core</Badge>
                <Badge variant="outline" className="text-xs">REST API</Badge>
                <Badge variant="outline" className="text-xs">MS SQL</Badge>
                <Badge variant="outline" className="text-xs">Windows Service</Badge>
                <Badge variant="outline" className="text-xs">ASP.NET</Badge>
              </div>
            </div>

            <Separator />

            {/* Experience 4 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Trainee Software Engineer
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  December 2019 - February 2021
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3 text-gray-600 dark:text-gray-400">
                <Building className="w-4 h-4" />
                Flexiv Micro System (Pvt) Ltd
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Write the code for a portion of the program</li>
                <li>Create store-procedures and SQL Functions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Education & Training</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Master of Science - Data Analytics and Artificial Intelligence
                </h3>
                <Badge variant="default">Present</Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400">University of Tasmania – Australia</p>
            </div>

            <Separator />

            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Science – Information Technology
                </h3>
                <Badge variant="secondary">January 2020</Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Sri Lanka Institute of Information Technology</p>
            </div>

            <Separator />

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Diploma of Spoken English
              </h3>
              <p className="text-gray-600 dark:text-gray-400">ICBT Campus – Sri Lanka</p>
            </div>
          </CardContent>
        </Card>

        {/* Languages Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="font-medium text-gray-900 dark:text-white">English</span>
                <Badge>Professional (C1)</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="font-medium text-gray-900 dark:text-white">Hindi</span>
                <Badge variant="secondary">Elementary (A1)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}