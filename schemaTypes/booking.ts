export default {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  description: 'Appointment booking submissions from the website forms',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Client Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Preferred Date',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sourcePage',
      title: 'Source Page',
      type: 'string',
      description: 'Which page the booking came from',
      options: {
        list: [
          { title: 'Home Page', value: 'home' },
          { title: 'About Page', value: 'about' },
          { title: 'Sarah Page', value: 'sarah' },
          { title: 'Training Page', value: 'training' },
          { title: 'Training Detail Page', value: 'training-detail' },
          { title: 'Coaching Page', value: 'coaching' },
          { title: 'Coaching Detail Page', value: 'coaching-detail' },
          { title: 'E-Motion Page', value: 'e-motion' },
          { title: 'E-Motion Detail Page', value: 'e-motion-detail' },
          { title: 'Assessments Page', value: 'assessments' },
          { title: 'Assessment Detail Page', value: 'assessment-detail' },
        ],
      },
    },
    {
      name: 'status',
      title: 'Booking Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'new',
    },
    {
      name: 'notes',
      title: 'Admin Notes',
      type: 'text',
      description: 'Internal notes about this booking',
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status',
      date: 'date',
    },
    prepare(selection: any) {
      const { title, subtitle, status, date } = selection;
      return {
        title: title || 'Unnamed Booking',
        subtitle: `${subtitle} - ${date} (${status})`,
      };
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Oldest First',
      name: 'submittedAtAsc',
      by: [{ field: 'submittedAt', direction: 'asc' }],
    },
  ],
}; 
