"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function TeacherHome() {
  const [selectedCourse, setSelectedCourse] = useState("Math 101")
  const [students, setStudents] = useState([
    {
      name: "John Doe",
      quizzes: [
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
      ],
      assignments: [
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
      ],
      midterm: { file: null, uploaded: false },
      final: { file: null, uploaded: false },
    },
    {
      name: "Jane Smith",
      quizzes: [
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
      ],
      assignments: [
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
      ],
      midterm: { file: null, uploaded: false },
      final: { file: null, uploaded: false },
    },
    {
      name: "Michael Johnson",
      quizzes: [
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
      ],
      assignments: [
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
        { file: null, uploaded: false },
      ],
      midterm: { file: null, uploaded: false },
      final: { file: null, uploaded: false },
    },
  ])
  const [uploadModal, setUploadModal] = useState(false)
  const [currentStudent, setCurrentStudent] = useState(null)
  const [currentAssessment, setCurrentAssessment] = useState(null)
  const handleUpload = (student, assessment) => {
    setCurrentStudent(student)
    setCurrentAssessment(assessment)
    setUploadModal(true)
  }
  const handleFileUpload = (file) => {
    if (currentStudent && currentAssessment) {
      if (currentAssessment.type === "quiz") {
        const updatedStudents = students.map((student) => {
          if (student.name === currentStudent.name) {
            return {
              ...student,
              quizzes: student.quizzes.map((quiz, index) => {
                if (index === currentAssessment.index) {
                  return { file, uploaded: true }
                }
                return quiz
              }),
            }
          }
          return student
        })
        setStudents(updatedStudents)
      } else if (currentAssessment.type === "assignment") {
        const updatedStudents = students.map((student) => {
          if (student.name === currentStudent.name) {
            return {
              ...student,
              assignments: student.assignments.map((assignment, index) => {
                if (index === currentAssessment.index) {
                  return { file, uploaded: true }
                }
                return assignment
              }),
            }
          }
          return student
        })
        setStudents(updatedStudents)
      } else if (currentAssessment.type === "midterm") {
        const updatedStudents = students.map((student) => {
          if (student.name === currentStudent.name) {
            return {
              ...student,
              midterm: { file, uploaded: true },
            }
          }
          return student
        })
        setStudents(updatedStudents)
      } else if (currentAssessment.type === "final") {
        const updatedStudents = students.map((student) => {
          if (student.name === currentStudent.name) {
            return {
              ...student,
              final: { file, uploaded: true },
            }
          }
          return student
        })
        setStudents(updatedStudents)
      }
      setUploadModal(false)
    }
  }
  return (
    <div className="flex flex-col h-screen bg-card">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">eFolder</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <span>{selectedCourse}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setSelectedCourse("Math 101")}>Math 101</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedCourse("English 202")}>English 202</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSelectedCourse("Biology 301")}>Biology 301</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="py-3 px-4 text-left">Student</th>
                {Array.from({ length: 5 }).map((_, i) => (
                  <th key={`quiz-${i}`} className="py-3 px-4 text-center">
                    <PencilIcon className="h-5 w-5" />
                  </th>
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <th key={`assignment-${i}`} className="py-3 px-4 text-center">
                    <FileIcon className="h-5 w-5" />
                  </th>
                ))}
                <th className="py-3 px-4 text-center">
                  <ClipboardIcon className="h-5 w-5" />
                </th>
                <th className="py-3 px-4 text-center">
                  <ClipboardIcon className="h-5 w-5" />
                </th>
                {/* <th className="py-3 px-4 text-center">Upload</th> */}
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 font-medium">{student.name}</td>
                  {student.quizzes.map((quiz, quizIndex) => (
                    <td key={`quiz-${index}-${quizIndex}`} className="py-3 px-4 text-center">
                      {quiz.uploaded ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            handleUpload(student, {
                              type: "quiz",
                              index: quizIndex,
                            })
                          }
                        >
                          <UploadIcon className="h-5 w-5" />
                        </Button>
                      )}
                    </td>
                  ))}
                  {student.assignments.map((assignment, assignmentIndex) => (
                    <td key={`assignment-${index}-${assignmentIndex}`} className="py-3 px-4 text-center">
                      {assignment.uploaded ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            handleUpload(student, {
                              type: "assignment",
                              index: assignmentIndex,
                            })
                          }
                        >
                          <UploadIcon className="h-5 w-5" />
                        </Button>
                      )}
                    </td>
                  ))}
                  <td className="py-3 px-4 text-center">
                    {student.midterm.uploaded ? (
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <Button variant="ghost" size="icon" onClick={() => handleUpload(student, { type: "midterm" })}>
                        <UploadIcon className="h-5 w-5" />
                      </Button>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {student.final.uploaded ? (
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <Button variant="ghost" size="icon" onClick={() => handleUpload(student, { type: "final" })}>
                        <UploadIcon className="h-5 w-5" />
                      </Button>
                    )}
                  </td>
                  {/* <td className="py-3 px-4 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleUpload(student, { type: "quiz", index: 0 })}
                    >
                      <UploadIcon className="h-5 w-5" />
                    </Button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Dialog open={uploadModal} onOpenChange={setUploadModal}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed bottom-4 right-4">
            <UploadIcon className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload File</DialogTitle>
            <DialogDescription>
              Upload a file for {currentStudent?.name} - {currentAssessment?.type}
            </DialogDescription>
          </DialogHeader>
          <div>
            <Input type="file" onChange={(e) => handleFileUpload(e.target.files[0])} />
          </div>
          <DialogFooter>
            <div>
              <Button variant="ghost">Cancel</Button>
            </div>
            <Button>Upload</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
